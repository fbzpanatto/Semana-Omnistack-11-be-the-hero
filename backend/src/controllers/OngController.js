const connection = require('../database/connections')
const generateUniqueId = require('../util/generateUniqueId')

module.exports = {
  async getAll(request, response) {
    const ongs = await connection('ongs').select('*')
    
    return response.json(ongs)
  },
  async create(request, response) {
    const {name, email, whatsapp, city, uf} = request.body

    const id = generateUniqueId()
  
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
  
    response.json({ id })
  }
}