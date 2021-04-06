const prisma = require('./db');
const path = require ('path');

async function createAccount(address) {
  try {
    const account = await prisma.account.create({
      data: { accountAddress: address },
    })
  } catch (err) {
    console.error(`Error at ${path.basename(__dirname)}/${path.basename(__filename)} ${err}`);
  }
}

module.exports = { createAccount };