"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _httpMethods = require("../constants/httpMethods");

var ExchangeRate =
/*#__PURE__*/
function () {
  function ExchangeRate(sdk) {
    (0, _classCallCheck2["default"])(this, ExchangeRate);
    this.sdk = sdk;
  }

  (0, _createClass2["default"])(ExchangeRate, [{
    key: "quote",
    value: function quote(quotes, callback) {
      var isBatch = (0, _isArray["default"])(quotes);
      var path = isBatch ? '/veem/v1.1/exchangerates/quotes/batch' : '/veem/v1.1/exchangerates/quotes';
      return this.sdk.apiClient.call({
        method: _httpMethods.POST,
        path: path,
        payload: quotes
      }, callback);
    }
  }]);
  return ExchangeRate;
}();

var _default = ExchangeRate;
exports["default"] = _default;