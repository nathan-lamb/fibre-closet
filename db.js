const knexconfig = require("./knexfile");


const knex = require('knex')(knexconfig[process.env.NODE_ENV || 'development'])

const getStashById = async (id) => {
  return await knex.from('stash').where('id', id).first()
};

const getStashIds = async () => {
  return await knex.from('stash').select('id', 'yarn')
};

module.exports = {
  getStashById: getStashById,
  getStashIds: getStashIds
};
