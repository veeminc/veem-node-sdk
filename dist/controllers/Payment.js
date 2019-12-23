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

var _castArray = _interopRequireDefault(require("lodash/castArray"));

var _map = _interopRequireDefault(require("lodash/map"));

var _first = _interopRequireDefault(require("lodash/first"));

var _get = _interopRequireDefault(require("lodash/get"));

var _set = _interopRequireDefault(require("lodash/set"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _httpMethods = require("../constants/httpMethods");

var Payment =
/*#__PURE__*/
function () {
  function Payment(sdk) {
    (0, _classCallCheck2["default"])(this, Payment);
    this.sdk = sdk;
  }

  (0, _createClass2["default"])(Payment, [{
    key: "get",
    value: function get(paymentId, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: "/veem/v1.1/payments/".concat(paymentId)
      }, callback);
    }
  }, {
    key: "getBatch",
    value: function getBatch(batchId, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: "/veem/v1.1/payments/batch/".concat(batchId),
        queries: {
          includeItems: true
        }
      }, callback);
    }
  }, {
    key: "list",
    value: function list(options, callback) {
      var queries = (0, _pick["default"])(options, ['paymentIds', 'batchId', 'batchItemIds', 'status', 'sort', 'pageNumber', 'pageSize']);
      return this.sdk.apiClient.call({
        method: _httpMethods.GET,
        path: '/veem/v1.1/payments',
        queries: queries
      }, callback);
    }
  }, {
    key: "draft",
    value: function draft(paymentOrPayments, callback) {
      var isBatch = (0, _isArray["default"])(paymentOrPayments);
      var payments = (0, _castArray["default"])(paymentOrPayments);
      var computedPayments = (0, _map["default"])(payments, function (payment) {
        return (0, _merge["default"])({}, payment, {
          approveAutomatically: false
        });
      });
      var computedPaymentOrPayments = isBatch ? computedPayments : (0, _first["default"])(computedPayments);
      return this._create(computedPaymentOrPayments, callback);
    }
  }, {
    key: "send",
    value: function send(paymentOrPayments, callback) {
      var isBatch = (0, _isArray["default"])(paymentOrPayments);
      var payments = (0, _castArray["default"])(paymentOrPayments);
      var computedPayments = (0, _map["default"])(payments, function (payment) {
        return (0, _merge["default"])({}, payment, {
          approveAutomatically: true
        });
      });
      var computedPaymentOrPayments = isBatch ? computedPayments : (0, _first["default"])(computedPayments);
      return this._create(computedPaymentOrPayments, callback);
    }
  }, {
    key: "sendById",
    value: function sendById(paymentId, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.POST,
        path: "/veem/v1.1/payments/".concat(paymentId, "/approve")
      }, callback);
    }
  }, {
    key: "cancel",
    value: function cancel(paymentId, callback) {
      return this.sdk.apiClient.call({
        method: _httpMethods.POST,
        path: "/veem/v1.1/payments/".concat(paymentId, "/cancel")
      }, callback);
    }
  }, {
    key: "_create",
    value: function _create(paymentOrPayments, callback) {
      var _this = this;

      var computedPaymentOrPayments, isBatch, attachments, uploadedAttachments, path, queries;
      return _regenerator["default"].async(function _create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              computedPaymentOrPayments = (0, _cloneDeep["default"])(paymentOrPayments);
              isBatch = (0, _isArray["default"])(computedPaymentOrPayments);

              if (isBatch) {
                _context.next = 8;
                break;
              }

              attachments = (0, _get["default"])(computedPaymentOrPayments, 'attachments', []);
              _context.next = 6;
              return _regenerator["default"].awrap(_bluebird["default"].map(attachments, function (attachment) {
                return _this.sdk.attachment.upload(attachment);
              }));

            case 6:
              uploadedAttachments = _context.sent;
              (0, _set["default"])(computedPaymentOrPayments, 'attachments', uploadedAttachments);

            case 8:
              path = isBatch ? '/veem/v1.1/payments/batch' : '/veem/v1.1/payments';
              queries = {
                includeItems: isBatch
              };
              return _context.abrupt("return", this.sdk.apiClient.call({
                method: _httpMethods.POST,
                path: path,
                payload: computedPaymentOrPayments,
                queries: queries
              }, callback));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);
  return Payment;
}();

var _default = Payment;
exports["default"] = _default;