"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _WebhookRequest = _interopRequireDefault(require("./WebhookRequest"));

var _WebhookResponse = _interopRequireDefault(require("./WebhookResponse"));

var Webhook = function Webhook() {
  (0, _classCallCheck2["default"])(this, Webhook);
};

Webhook.request = _WebhookRequest["default"];
Webhook.response = _WebhookResponse["default"];
var _default = Webhook;
exports["default"] = _default;