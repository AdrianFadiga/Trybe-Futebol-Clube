import * as sinon from 'sinon';
import * as chai from 'chai';
import IMatch from '../database/interfaces/IMatch';
import mocks from './mocks/mocks';
import LeaderboardService from '../database/service/LeaderboardService';
import utils from '../database/utils/utils';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match';

import * as bcrypt from 'bcryptjs';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa de rota de Leaderboard', () => {
    describe('Testa a rota get /leaderboard/home', () => {
        before(async () => {
            sinon.stub(Match, 'findAll')
            .resolves(mocks.homeMatchMock as any)
        });
        after(() => {
            (Match.findAll as sinon.SinonStub).restore()
        });
        it('Verifica se retorna um array de times e o status 200', async () => {
            const response = await chai.request(app).get('/leaderboard/home').send();
            expect(response.body).to.be.deep.equal(mocks.sortedHomeTeamMock);
            expect(response.status).to.be.equal(200);
        });
    })
    describe('Testa a rota get /leaderboard/away', () => {
        before(async () => {
            sinon.stub(Match, 'findAll')
            .resolves(mocks.awayMatchMock as any)
        });
        after(() => {
            (Match.findAll as sinon.SinonStub).restore()
        });
        it('Verifica se retorna um array de times e o status 200', async () => {
            const response = await chai.request(app).get('/leaderboard/away').send();
            expect(response.body).to.be.deep.equal(mocks.sortedAwayMock);
            expect(response.status).to.be.equal(200);
        });  
    });
    describe('Testa a rota get /leaderboard', () => {
        before(async () => {
            sinon.stub(Match, 'findAll')
            .resolves(mocks.homeMatchMock as any);
        })
        after(async () => {
            (Match.findAll as sinon.SinonStub).restore();
        })
        it('Retorna um array de times e o status 200', async () => {
            const response = await chai.request(app).get('/leaderboard').send();
            expect(response.body).to.be.deep.equal(mocks.fullLeaderboardSortedMock);
            expect(response.status).to.be.equal(200);
        })
    })
})