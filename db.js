const knexconfig = require("./knexfile");


const knex = require('knex')(knexconfig[process.env.NODE_ENV || 'development'])

const getStashById = async (id) => {
  return await knex.from('stash').where('id', id).first()
}

module.exports = {
  getStashById: getStashById
}
