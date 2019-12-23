"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _Schema2 = _interopRequireDefault(require("./Schema"));

var ExchangeRateResponse =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(ExchangeRateResponse, _Schema);

  function ExchangeRateResponse() {
    (0, _classCallCheck2["default"])(this, ExchangeRateResponse);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ExchangeRateResponse).apply(this, arguments));
  }

  return ExchangeRateResponse;
}(_Schema2["default"]);

ExchangeRateResponse.schema = {
  title: 'ExchangeRateResponse',
  type: 'object',
  properties: {
    expiry: {
      type: 'number'
    },
    fromAmount: {
      type: 'number'
    },
    fromCurrency: {
      type: 'string'
    },
    id: {
      type: 'string'
    },
    rate: {
      type: 'number',
      optional: true
    },
    timeCreated: {
      type: 'string',
      optional: true
    },
    toAmount: {
      type: 'number'
    },
    toCurrency: {
      type: 'string'
    }
  }
};
var _default = ExchangeRateResponse;
exports["default"] = _default;