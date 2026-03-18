const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe ('Transferencias', () => {
    describe ('POST /transferencias', () => {
        let token 

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456')
        })

        it ('Deve retornar sucesso com 201 quando o valor da transferência for acima de 10 reais', async () => {          
            const bodyTransferencias = { ...postTransferencias}

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
            
            expect(resposta.status).to.equal(201);

            console.log(resposta.body)
        })

        it ('Deve retornar falha com 422 quando o valor da transferência for abaixo de 10 reais', async () => {
            const bodyTransferencias = { ...postTransferencias}
            bodyTransferencias.valor = 8
            
            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
            
            expect(resposta.status).to.equal(422);

            console.log(resposta.body)
        })
    })
})