const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connections')

describe('ONG', () => {
  beforeEach(async () => {
    // zerar o banco antes de iniciar o teste
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG',async  () => {
    const response = await request(app)
      .post('/ongs')
      // .set('Authorization', 'put a valid id here')
      .send({
        name: "APAD2",
        email: "contato@teste.com.br",
        whatsapp: "11968568913",
        city: "Sao Paulo",
        uf: "SP"
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})