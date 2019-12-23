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

var ErrorCodeResponse =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(ErrorCodeResponse, _Schema);

  function ErrorCodeResponse() {
    (0, _classCallCheck2["default"])(this, ErrorCodeResponse);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ErrorCodeResponse).apply(this, arguments));
  }

  return ErrorCodeResponse;
}(_Schema2["default"]);

ErrorCodeResponse.schema = {
  title: 'ErrorCodeResponse',
  type: 'object',
  properties: {
    errorCode: {
      type: 'number'
    },
    errorMessage: {
      type: 'string'
    }
  }
};
var _default = ErrorCodeResponse;
exports["default"] = _default;