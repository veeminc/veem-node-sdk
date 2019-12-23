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

var AttachmentResponse =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(AttachmentResponse, _Schema);

  function AttachmentResponse() {
    (0, _classCallCheck2["default"])(this, AttachmentResponse);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AttachmentResponse).apply(this, arguments));
  }

  return AttachmentResponse;
}(_Schema2["default"]);

AttachmentResponse.schema = {
  title: 'AttachmentResponse',
  type: 'object',
  properties: {}
};
var _default = AttachmentResponse;
exports["default"] = _default;