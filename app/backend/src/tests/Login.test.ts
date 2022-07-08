import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';
import * as bcrypt from 'bcryptjs';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes da rota de Login', () => {
  describe('POST /login de SUCESSO', () => {
    before(async () => {
    sinon.stub(User, "findOne")
      .resolves({email: 'xablau@xablau.com'} as User);
      sinon.stub(bcrypt, "compare")
      .resolves(true)
      });
    after(() => { 
      (User.findOne as sinon.SinonStub).restore();
      (bcrypt.compare as sinon.SinonStub).restore();
     });
    it('Retorna um token e o status 200', async () => { 
      const response = await chai.request(app).post('/login').send({
        email: "emailcorreto@emailcorreto.com",
        password: "senhacorreta"
      });
      expect(response).to.have.status(200);
      expect(response.body).to.be.have.keys('token');
     });
  });
  describe('Post /login de FALHA', () => {
    before(async () => {
      sinon.stub(User, "findOne")
        .resolves(null);
        });
      after(() => { 
        (User.findOne as sinon.SinonStub).restore();
       });
    it('Retorna o erro status 401 com a mensagem "Incorrect email or password"', async () => { 
      const response = await chai.request(app).post('/login').send({
        email: "emailIncorreto@emailincorreto.com",
        password: "senhaIncorreta"
      });
      expect(response).to.have.status(401);
      expect(response.body.message).to.be.equal('Incorrect email or password')
     });
  });
  describe('GET /login/validate de SUCESSO', () => {
    before(async () => {
      sinon.stub(User, "findOne")
        .resolves({role: 'admin'} as User);
      sinon.stub(jwt, 'verify')
      .resolves({data: 'emailmock@email.com'})
        });
      after(() => { 
        (User.findOne as sinon.SinonStub).restore();
       });
    it('Retorna a role do usuário e o status 200', async () => { 
      const response = await chai.request(app).get('/login/validate')
      .set('authorization', 'token123')
      .send();
      expect(response.body.role).to.be.equal('admin');
      expect(response).to.have.status(200);
     });
  });
  describe('GET /login/validate de FALHA', () => {
    before(async () => {
      sinon.stub(User, "findOne")
        .resolves(null);
        });
      after(() => { 
        (User.findOne as sinon.SinonStub).restore();
       });
    it('Retorna o erro status 401 com a mensagem "Invalid token"', async () => { 
      const response = await chai.request(app).get('/login/validate')
      .set('authorization', 'token123')
      .send();
      expect(response.body.message).to.be.equal('Invalid token');
      expect(response).to.have.status(401);
     });
  });
})
