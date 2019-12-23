"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _httpMethods = require("../constants/httpMethods");

var _contentType = require("../constants/contentType");

var _accepts = require("../constants/accepts");

var Attachment =
/*#__PURE__*/
function () {
  function Attachment(sdk) {
    (0, _classCallCheck2["default"])(this, Attachment);
    this.sdk = sdk;
  }

  (0, _createClass2["default"])(Attachment, [{
    key: "upload",
    value: function upload(file, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.POST,
        path: "/veem/v1.1/attachments",
        requestHeaderOptions: {
          'Content-Type': _contentType.FORM_DATA
        },
        payload: {
          file: file
        }
      }, callback);
    }
  }, {
    key: "download",
    value: function download(attachment, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: "/veem/v1.1/attachments",
        requestHeaderOptions: {
          Accept: _accepts.OCTET_STREAM
        },
        queries: attachment
      }, callback);
    }
  }]);
  return Attachment;
}();

var _default = Attachment;
exports["default"] = _default;