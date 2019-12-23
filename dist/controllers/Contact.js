"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _httpMethods = require("../constants/httpMethods");

var Contact =
/*#__PURE__*/
function () {
  function Contact(sdk) {
    (0, _classCallCheck2["default"])(this, Contact);
    this.sdk = sdk;
  }

  (0, _createClass2["default"])(Contact, [{
    key: "get",
    value: function get(contactId, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: "/veem/v1.1/contacts/".concat(contactId)
      }, callback);
    }
  }, {
    key: "getBatch",
    value: function getBatch(batchId, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: "/veem/v1.1/contacts/batch/".concat(batchId),
        queries: {
          includeItems: true
        }
      }, callback);
    }
  }, {
    key: "list",
    value: function list(options, callback) {
      var queries = (0, _pick["default"])(options, ['email', 'firstName', 'lastName', 'businessName', 'batchId', 'batchItemIds', 'pageNumber', 'pageSize']);
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: '/veem/v1.1/contacts',
        queries: queries
      }, callback);
    }
  }, {
    key: "create",
    value: function create(contactOrContacts, callback) {
      var isBatch = (0, _isArray["default"])(contactOrContacts);
      var path = isBatch ? '/veem/v1.1/contacts/batch' : '/veem/v1.1/contacts';
      return this.sdk.apiClient.call({
        method: _httpMethods.POST,
        path: path,
        payload: contactOrContacts
      }, callback);
    }
  }]);
  return Contact;
}();

var _default = Contact;
exports["default"] = _default;