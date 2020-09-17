const pool = require ('./index2');
const path = require ('path');

async function getTokens () {
  try {
    const tokens = await pool.query('select * from token');
    return tokens;

  } catch (err) {
    console.error(`Error at ${path.basename(__dirname)}/${path.basename(__filename)} ${err}`);
  } 
}

module.exports = {
  getTokens,
}