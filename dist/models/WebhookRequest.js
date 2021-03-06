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

var WebhookRequest =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(WebhookRequest, _Schema);

  function WebhookRequest() {
    (0, _classCallCheck2["default"])(this, WebhookRequest);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WebhookRequest).apply(this, arguments));
  }

  return WebhookRequest;
}(_Schema2["default"]);

WebhookRequest.schema = {
  title: 'WebhookRequest',
  type: 'object',
  properties: {
    callbackUrl: {
      type: 'string'
    },
    event: {
      type: 'string'
    }
  }
};
var _default = WebhookRequest;
exports["default"] = _default;