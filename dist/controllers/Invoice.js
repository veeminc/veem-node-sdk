"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _get = _interopRequireDefault(require("lodash/get"));

var _set = _interopRequireDefault(require("lodash/set"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _httpMethods = require("../constants/httpMethods");

var Invoice =
/*#__PURE__*/
function () {
  function Invoice(sdk) {
    (0, _classCallCheck2["default"])(this, Invoice);
    this.sdk = sdk;
  }

  (0, _createClass2["default"])(Invoice, [{
    key: "get",
    value: function get(invoiceId, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: "/veem/v1.1/invoices/".concat(invoiceId)
      }, callback);
    }
  }, {
    key: "draft",
    value: function draft(invoice, callback) {
      var computedInvoice = (0, _merge["default"])({}, invoice, {
        approveAutomatically: false
      });
      return this._create(computedInvoice, callback);
    }
  }, {
    key: "send",
    value: function send(invoice, callback) {
      var computedInvoice = (0, _merge["default"])({}, invoice, {
        approveAutomatically: true
      });
      return this._create(computedInvoice, callback);
    }
  }, {
    key: "sendById",
    value: function sendById(invoiceId, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.POST,
        path: "/veem/v1.1/invoices/".concat(invoiceId, "/approve")
      }, callback);
    }
  }, {
    key: "cancel",
    value: function cancel(invoiceId, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.POST,
        path: "/veem/v1.1/invoices/".concat(invoiceId, "/cancel")
      }, callback);
    }
  }, {
    key: "_create",
    value: function _create(invoice, callback) {
      var _this = this;

      var computedInvoice, attachments, uploadedAttachments;
      return _regenerator["default"].async(function _create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              computedInvoice = (0, _cloneDeep["default"])(invoice);
              attachments = (0, _get["default"])(invoice, 'attachments', []);
              _context.next = 4;
              return _regenerator["default"].awrap(_bluebird["default"].map(attachments, function (attachment) {
                return _this.sdk.attachment.upload(attachment);
              }));

            case 4:
              uploadedAttachments = _context.sent;
              (0, _set["default"])(computedInvoice, 'attachments', uploadedAttachments);
              return _context.abrupt("return", this.sdk.apiClient.call({
                method: _httpMethods.POST,
                path: '/veem/v1.1/invoices',
                payload: computedInvoice
              }, callback));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);
  return Invoice;
}();

var _default = Invoice;
exports["default"] = _default;