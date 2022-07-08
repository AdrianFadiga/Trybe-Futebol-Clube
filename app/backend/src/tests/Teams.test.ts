import * as sinon from 'sinon';
import * as chai from 'chai';
import ITeam from '../database/interfaces/ITeam'

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota de Teams', () => {
    describe('get /login de SUCESSO', () => {
        const teamsMock = [	{
            id: 1,
            teamName: "Avaí/Kindermann"
        },
        {
            id: 2,
            teamName: "Bahia"
        },
        {
            id: 3,
            teamName: "Botafogo"
        }]
        before(async () => {
            sinon.stub(Team, 'findAll')
            .resolves(teamsMock as ITeam[])
        });
        after(() => {
            (Team.findAll as sinon.SinonStub).restore()
        });
        it('Retorna o status 200 com uma lista de times', async () => {
            const response = await chai.request(app).get('/teams')
            .send();
            expect(response.body).to.deep.equal(teamsMock);
            expect(response.status).to.equal(200);
        });
    });
    describe('get /login/id de SUCESSO', () => {
        const teamMock = {
            id: 1,
            teamName: "Avaí/Kindermann"
        };
        before(async() => {
            sinon.stub(Team, 'findOne')
            .resolves(teamMock as ITeam)
        })
        after(() => {
            (Team.findOne as sinon.SinonStub).restore();
        });
        it('Verifica se retorna o status 200 com um objeto de time', async () => { 
            const response = await chai.request(app).get('/teams/1')
            .send();
            expect(response.body).to.deep.equal(teamMock);
            expect(response.status).to.equal(200);
         });
    });
    describe('get /login/id de FALHA', () => {
        const errStatus = 404;
        const errMessage = 'Id não encontrado'
        before(async() => {
            sinon.stub(Team, 'findOne')
            .resolves(null)
        })
        after(() => {
            (Team.findOne as sinon.SinonStub).restore();
        });
        it('Verifica se retorna o status 404 com a mensagem "Id não encontrado"', async () => { 
            const response = await chai.request(app).get('/teams/1')
            .send();
            expect(response.body.message).to.equal(errMessage);
            expect(response.status).to.equal(404);
         });
    })
})