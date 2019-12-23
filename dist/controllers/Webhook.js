"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _httpMethods = require("../constants/httpMethods");

var Webhook =
/*#__PURE__*/
function () {
  function Webhook(sdk) {
    (0, _classCallCheck2["default"])(this, Webhook);
    this.sdk = sdk;
  }

  (0, _createClass2["default"])(Webhook, [{
    key: "get",
    value: function get(webhookId, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: "/veem/v1.1/webhooks/".concat(webhookId)
      }, callback);
    }
  }, {
    key: "list",
    value: function list(callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: "/veem/v1.1/webhooks"
      }, callback);
    }
  }]);
  return Webhook;
}();

var _default = Webhook;
exports["default"] = _default;