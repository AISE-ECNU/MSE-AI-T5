import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export var MockSSEResponse = /*#__PURE__*/function () {
  function MockSSEResponse(dataArray) {
    var _this = this;
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    _classCallCheck(this, MockSSEResponse);
    _defineProperty(this, "controller", void 0);
    _defineProperty(this, "encoder", new TextEncoder());
    _defineProperty(this, "stream", void 0);
    this.dataArray = dataArray;
    this.delay = delay;
    this.stream = new ReadableStream({
      start: function start(controller) {
        _this.controller = controller;
        _this.pushData();
      }
    });
  }
  _createClass(MockSSEResponse, [{
    key: "pushData",
    value: function pushData() {
      var _this2 = this;
      if (this.dataArray.length === 0) {
        this.controller.close();
        return;
      }
      var chunk = this.dataArray.shift();
      this.controller.enqueue(this.encoder.encode(chunk));
      setTimeout(function () {
        return _this2.pushData();
      }, this.delay);
    }
  }, {
    key: "getResponse",
    value: function getResponse() {
      return new Response(this.stream);
    }
  }]);
  return MockSSEResponse;
}();