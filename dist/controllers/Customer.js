"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _httpMethods = require("../constants/httpMethods");

var Customer =
/*#__PURE__*/
function () {
  function Customer(sdk) {
    (0, _classCallCheck2["default"])(this, Customer);
    this.sdk = sdk;
  }

  (0, _createClass2["default"])(Customer, [{
    key: "list",
    value: function list(email, callback) {
      var queries = {
        email: email
      };
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: '/veem/v1.1/customers',
        queries: queries
      }, callback);
    }
  }]);
  return Customer;
}();

var _default = Customer;
exports["default"] = _default;