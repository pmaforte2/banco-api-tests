const request = require('supertest');
const { expect } = require('chai')
const postLogin = require('../fixtures/postLogin.json')

require('dotenv').config()

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 ao utilizar credenciais válidas', async () => {
            const bodyLogin = {...postLogin}

            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)
            
            
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
        })
    })
})