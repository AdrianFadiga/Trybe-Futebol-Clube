import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';
import * as bcrypt from 'bcryptjs';

import { Response } from 'superagent';
import Match from '../database/models/Match';
import IMatch from '../database/interfaces/IMatch';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste da rota de Matches', () => {
    describe('get /matches de SUCESSO', () => {
        const matchesMock = [{
                id: 1,
                homeTeam: 16,
                homeTeamGoals: 1,
                awayTeam: 8,
                awayTeamGoals: 1,
                inProgress: false,
                teamHome: {
                    id: 16,
                    teamName: "São Paulo"
                },
                teamAway: {
                    id: 8,
                    teamName: "Grêmio"
                }
            },
            {
                id: 2,
                homeTeam: 9,
                homeTeamGoals: 1,
                awayTeam: 14,
                awayTeamGoals: 1,
                inProgress: false,
                teamHome: {
                    id: 9,
                    teamName: "Internacional"
                },
                teamAway: {
                    id: 14,
                    teamName: "Santos"
                }
            }];
        before(async () => {
            sinon.stub(Match, 'findAll')
            .resolves(matchesMock as IMatch[])
        });
        after(() => {
            (Match.findAll as sinon.SinonStub).restore();
        })
    it('Retorna o status 200 com a lista de times', async () => {
        const response = await chai.request(app).get('/matches')
            .send();
            expect(response.body).to.deep.equal(matchesMock);
            expect(response.status).to.equal(200);
    })
    })
})