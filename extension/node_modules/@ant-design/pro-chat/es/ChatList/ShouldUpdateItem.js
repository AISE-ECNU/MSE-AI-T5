import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import isEqual from 'fast-deep-equal';
import { Component } from 'react';
/**
 * 组件用于判断是否需要更新的辅助类。
 */
var ShouldUpdateItem = /*#__PURE__*/function (_Component) {
  _inherits(ShouldUpdateItem, _Component);
  var _super = _createSuper(ShouldUpdateItem);
  function ShouldUpdateItem() {
    _classCallCheck(this, ShouldUpdateItem);
    return _super.apply(this, arguments);
  }
  _createClass(ShouldUpdateItem, [{
    key: "shouldComponentUpdate",
    value:
    /**
     * 判断组件是否需要更新。
     * @param nextProps - 下一个属性对象。
     * @returns 如果需要更新则返回 true，否则返回 false。
     */
    function shouldComponentUpdate(nextProps) {
      if (nextProps.shouldUpdate) {
        return nextProps.shouldUpdate(this.props, nextProps);
      }
      try {
        return !isEqual(this.props.content, nextProps === null || nextProps === void 0 ? void 0 : nextProps.content) || !isEqual(this.props.loading, nextProps === null || nextProps === void 0 ? void 0 : nextProps.loading) || !isEqual(this.props.chatItemRenderConfig, nextProps === null || nextProps === void 0 ? void 0 : nextProps.chatItemRenderConfig) || !isEqual(this.props.meta, nextProps === null || nextProps === void 0 ? void 0 : nextProps.meta);
      } catch (error) {
        return true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return ShouldUpdateItem;
}(Component);
export default ShouldUpdateItem;