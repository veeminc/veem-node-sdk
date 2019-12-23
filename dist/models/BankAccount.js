"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _Address = _interopRequireDefault(require("./Address"));

var BankAccount = function BankAccount(data) {
  (0, _classCallCheck2["default"])(this, BankAccount);
  this.data = data;
  this.schema = BankAccount.schema;
};

BankAccount.schema = {
  title: 'BankAccount',
  type: 'object',
  properties: {
    bankAccountNumber: {
      type: 'string'
    },
    bankAddress: {
      type: 'object',
      properties: _Address["default"].schema.properties
    },
    bankCnaps: {
      type: 'string'
    },
    bankCode: {
      type: 'string'
    },
    bankIfscBranchCode: {
      type: 'string'
    },
    bankInstitutionNumber: {
      type: 'string'
    },
    bankName: {
      type: 'string'
    },
    beneficiaryName: {
      type: 'string'
    },
    branchCode: {
      type: 'string'
    },
    bsbBankCode: {
      type: 'string'
    },
    clabe: {
      type: 'string'
    },
    currencyCode: {
      type: 'string'
    },
    iban: {
      type: 'string'
    },
    isoCountryCode: {
      type: 'string'
    },
    routingNumber: {
      type: 'string'
    },
    sortCode: {
      type: 'string'
    },
    swiftBic: {
      type: 'string'
    },
    transitCode: {
      type: 'string'
    }
  }
};
var _default = BankAccount;
exports["default"] = _default;