"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _AttachmentRequest = _interopRequireDefault(require("./AttachmentRequest"));

var _AttachmentResponse = _interopRequireDefault(require("./AttachmentResponse"));

var Attachment = function Attachment() {
  (0, _classCallCheck2["default"])(this, Attachment);
};

Attachment.request = _AttachmentRequest["default"];
Attachment.response = _AttachmentResponse["default"];
var _default = Attachment;
exports["default"] = _default;