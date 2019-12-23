"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _superagent = _interopRequireDefault(require("superagent"));

var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));

var _set = _interopRequireDefault(require("lodash/set"));

var _isFile = _interopRequireDefault(require("./isFile"));

var _buildUrl = _interopRequireDefault(require("./buildUrl"));

var _httpMethods = require("../constants/httpMethods");

var _environments = require("../constants/environments");

var _contentType = require("../constants/contentType");

var _accepts = require("../constants/accepts");

var DEFAULT_ENVIRONMENT = _environments.SANDBOX;
var DEFAULT_REQUEST_HEADER_OPTIONS = {
  Accept: _accepts.JSON,
  'Content-Type': _contentType.JSON
};

var ApiClient =
/*#__PURE__*/
function () {
  function ApiClient() {
    var environment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENVIRONMENT;
    (0, _classCallCheck2["default"])(this, ApiClient);
    var environmentConfig = _environments.ENVIRONMENTS_CONFIG[environment] || _environments.ENVIRONMENTS_CONFIG[DEFAULT_ENVIRONMENT];
    this.basePath = environmentConfig.basePath;
    this.accessToken = null;
    this.buildUrl = _buildUrl["default"];
    this.isFile = _isFile["default"];
  }

  (0, _createClass2["default"])(ApiClient, [{
    key: "call",
    value: function call(_ref, callback) {
      var _this = this;

      var _ref$method = _ref.method,
          method = _ref$method === void 0 ? _httpMethods.GET : _ref$method,
          _ref$path = _ref.path,
          path = _ref$path === void 0 ? null : _ref$path,
          _ref$requestHeaderOpt = _ref.requestHeaderOptions,
          requestHeaderOptions = _ref$requestHeaderOpt === void 0 ? {} : _ref$requestHeaderOpt,
          _ref$queries = _ref.queries,
          queries = _ref$queries === void 0 ? {} : _ref$queries,
          _ref$payload = _ref.payload,
          payload = _ref$payload === void 0 ? null : _ref$payload;
      return new Promise(function (resolve, reject) {
        var apiUrl = _this.buildUrl(_this.basePath, path);

        var request = (0, _superagent["default"])(method, apiUrl);
        var computedRequestHeaderOptions = Object.assign({
          'X-Request-ID': (0, _uniqueId["default"])(Date.now())
        }, DEFAULT_REQUEST_HEADER_OPTIONS, requestHeaderOptions);
        _this.accessToken && (0, _set["default"])(computedRequestHeaderOptions, 'Authorization', "Bearer ".concat(_this.accessToken));
        var isMultipartFormData = computedRequestHeaderOptions['Content-Type'] === _contentType.FORM_DATA;
        var acceptsStream = computedRequestHeaderOptions['Accept'] === _accepts.OCTET_STREAM;
        request.query(queries).set(computedRequestHeaderOptions);

        if (isMultipartFormData) {
          var payloadKeys = Object.keys(payload);
          payloadKeys.forEach(function (key) {
            var field = payload[key];

            if (_this.isFile(field)) {
              request.attach(key, field);
            } else {
              request.field(key, field);
            }
          });
        } else {
          request.send(payload);
        }

        if (acceptsStream) request.buffer();
        request.end(function (error, response) {
          var hasError = !!error;
          callback && callback(error, response.body, response);
          hasError ? reject(error) : resolve(response.body);
        });
      });
    }
  }]);
  return ApiClient;
}();

var _default = ApiClient;
exports["default"] = _default;