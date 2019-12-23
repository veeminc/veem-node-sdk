"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _uberJsonSchemaFilter = _interopRequireDefault(require("uber-json-schema-filter"));

var _JSV = require("JSV");

var env = _JSV.JSV.createEnvironment();

var Schema =
/*#__PURE__*/
function () {
  function Schema() {
    (0, _classCallCheck2["default"])(this, Schema);
  }

  (0, _createClass2["default"])(Schema, null, [{
    key: "filter",
    value: function filter(data) {
      return (0, _uberJsonSchemaFilter["default"])(this.schema, data);
    }
  }, {
    key: "validate",
    value: function validate(data) {
      return env.validate(data, this.schema).errors.length === 0;
    }
  }]);
  return Schema;
}();

var _default = Schema;
exports["default"] = _default;