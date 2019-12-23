"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _httpMethods = require("../constants/httpMethods");

var Metadata =
/*#__PURE__*/
function () {
  function Metadata(sdk) {
    (0, _classCallCheck2["default"])(this, Metadata);
    this.sdk = sdk;
  }

  (0, _createClass2["default"])(Metadata, [{
    key: "getCountryCurrencyMap",
    value: function getCountryCurrencyMap(options, callback) {
      var query = (0, _pick["default"])(options, ['bankFields']);
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: '/veem/public/v1.1/country-currency-map',
        query: query
      }, callback);
    }
  }, {
    key: "getErrorCodes",
    value: function getErrorCodes(callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: '/veem/public/v1.1/errorcodes'
      }, callback);
    }
  }]);
  return Metadata;
}();

var _default = Metadata;
exports["default"] = _default;