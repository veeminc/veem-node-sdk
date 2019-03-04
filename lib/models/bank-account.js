var Address = require('./address')
var filter = require('uber-json-schema-filter')

function BankAccount(data) {
  this.data = data
}

BankAccount.prototype.schema = {
  title: 'BankAccount',
  type: 'object',
  properties: {
    bankAccountNumber: {
      type: 'string',
    },
    bankAddress: {
      type: 'object',
      properties: Address.prototype.schema.properties,
    },
    bankCnaps: {
      type: 'string',
    },
    bankCode: {
      type: 'string',
    },
    bankIfscBranchCode: {
      type: 'string',
    },
    bankInstitutionNumber: {
      type: 'string',
    },
    bankName: {
      type: 'string',
    },
    beneficiaryName: {
      type: 'string',
    },
    branchCode: {
      type: 'string',
    },
    bsbBankCode: {
      type: 'string',
    },
    clabe: {
      type: 'string',
    },
    currencyCode: {
      type: 'string',
    },
    iban: {
      type: 'string',
    },
    isoCountryCode: {
      type: 'string',
    },
    routingNumber: {
      type: 'string',
    },
    sortCode: {
      type: 'string',
    },
    swiftBic: {
      type: 'string',
    },
    transitCode: {
      type: 'string',
    }
  },
}

module.exports = BankAccount
