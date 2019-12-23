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

var AttachmentRequest =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(AttachmentRequest, _Schema);

  function AttachmentRequest() {
    (0, _classCallCheck2["default"])(this, AttachmentRequest);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AttachmentRequest).apply(this, arguments));
  }

  return AttachmentRequest;
}(_Schema2["default"]);

AttachmentRequest.schema = {
  title: 'AttachmentRequest',
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    referenceId: {
      type: 'string'
    }
  }
};
var _default = AttachmentRequest;
exports["default"] = _default;