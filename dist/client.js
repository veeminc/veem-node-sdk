"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _apiClient = _interopRequireDefault(require("./utils/apiClient"));

var _Payment = _interopRequireDefault(require("./controllers/Payment"));

var _Invoice = _interopRequireDefault(require("./controllers/Invoice"));

var _Attachment = _interopRequireDefault(require("./controllers/Attachment"));

var _ExchangeRate = _interopRequireDefault(require("./controllers/ExchangeRate"));

var _Metadata = _interopRequireDefault(require("./controllers/Metadata"));

var _Contact = _interopRequireDefault(require("./controllers/Contact"));

var _Customer = _interopRequireDefault(require("./controllers/Customer"));

var _Webhook = _interopRequireDefault(require("./controllers/Webhook"));

var Client =
/*#__PURE__*/
function () {
  function Client() {
    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Client);
    this.configuration = configuration;
    this.apiClient = new _apiClient["default"](configuration.environment);
    this.metadata = new _Metadata["default"](this);
    this.payment = new _Payment["default"](this);
    this.invoice = new _Invoice["default"](this);
    this.exchangeRate = new _ExchangeRate["default"](this);
    this.contact = new _Contact["default"](this);
    this.customer = new _Customer["default"](this);
    this.attachment = new _Attachment["default"](this);
    this.webhook = new _Webhook["default"](this);
    this.authenticate();
  }

  (0, _createClass2["default"])(Client, [{
    key: "authenticate",
    value: function authenticate() {
      var accessToken = this.configuration.accessToken;
      this.apiClient.accessToken = accessToken;
    }
  }]);
  return Client;
}();

var _default = Client;
exports["default"] = _default;