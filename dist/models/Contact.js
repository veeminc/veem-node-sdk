"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _ContactRequest = _interopRequireDefault(require("./ContactRequest"));

var _ContactResponse = _interopRequireDefault(require("./ContactResponse"));

var Contact = function Contact() {
  (0, _classCallCheck2["default"])(this, Contact);
};

Contact.request = _ContactRequest["default"];
Contact.response = _ContactResponse["default"];
var _default = Contact;
exports["default"] = _default;