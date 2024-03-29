const prisma = require('./db');
const path = require ('path');

async function getFields() {
  try {
    const fields = await prisma.field.findMany({
      include: {
        protocol: {
          select: {
            name: true
          }
        },
        seedTokens: {
          select: {
            tokenId: true,
            seedIndex: true
          }
        },
        cropTokens: {
          select: {
            tokenId: true,
            unclaimedBalanceMethod: true,
            token: {
              select: {
                name:true,
                address: true
              }
            }
          }
        },
        contractAddresses: {
          select: {
            addressTypes: true,
            address: true,
            decimals: true,
            contractInterface: true
          }
        },
        secondaryFields: {
          select: {
            secondaryField: {
              select: {
                name: true,
                contractAddresses: {
                  select: {
                    addressTypes: true,
                    address: true,
                    contractInterface: true,
                  }
                },
                cropTokens: {
                  select: {
                    fieldId: true,
                    unclaimedBalanceMethod: true,
                    token: {
                      select: {
                        tokenId: true,
                        name: true,
                        contractInterface: true,
                        decimals: true
                      }
                    }
                  }
                },
                seedTokens: {
                  select: {
                    token: {
                      select: {
                        name: true,
                        decimals: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
    return fields;
  } catch (err) {
    console.error(`Error at ${path.basename(__dirname)}/${path.basename(__filename)} ${err}`);
  }
  finally {
    (async () => {await prisma.$disconnect()})();
  }
}

async function getFieldWithReceiptToken(receiptToken) {
  try {
    const field = await prisma.field.findOne({
      where: {
        receiptToken: receiptToken,
      },
      include: {
        fieldSeed: {
          select: {
            tokenId: true
          }
        },
        fieldCrop: {
          select: {
            tokenId: true
          }
        }
      }
    })
    return field;
  } catch (err) {
    console.error(`Error at ${path.basename(__dirname)}/${path.basename(__filename)} ${err}`);
  } finally {
    (async () => {await prisma.$disconnect()})();
  }
}

module.exports = {
  getFields,
  getFieldWithReceiptToken
}