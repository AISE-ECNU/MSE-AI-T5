import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import ActionIcon from "../ActionIcon";
import Icon from "../Icon";
import Spotlight from "../components/Spotlight";
import { ActionGroup as ProEditorActionGroup } from '@ant-design/pro-editor';
import { memo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var ActionIconGroup = /*#__PURE__*/memo(function (_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'block' : _ref$type,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    placement = _ref.placement,
    _ref$spotlight = _ref.spotlight,
    spotlight = _ref$spotlight === void 0 ? false : _ref$spotlight,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'row' : _ref$direction,
    _ref$dropdownMenu = _ref.dropdownMenu,
    dropdownMenu = _ref$dropdownMenu === void 0 ? null : _ref$dropdownMenu,
    onActionClick = _ref.onActionClick,
    className = _ref.className,
    style = _ref.style;
  var tooltipsPlacement = placement || (direction === 'column' ? 'right' : 'top');
  var mergeDropDownList = dropdownMenu === null || dropdownMenu === void 0 ? void 0 : dropdownMenu.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      icon: /*#__PURE__*/_jsx(Icon, {
        icon: item.icon,
        size: "small"
      }),
      onClick: onActionClick ? function (info) {
        return onActionClick({
          item: item,
          key: info.key,
          keyPath: info.keyPath
        });
      } : undefined
    });
  });
  return /*#__PURE__*/_jsx(ProEditorActionGroup, {
    className: className,
    direction: direction,
    type: type,
    dropdownProps: {
      placement: tooltipsPlacement
    },
    style: style,
    dropdownMenu: mergeDropDownList,
    render: function render() {
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [spotlight && /*#__PURE__*/_jsx(Spotlight, {}), (items === null || items === void 0 ? void 0 : items.length) > 0 && items.map(function (item) {
          return /*#__PURE__*/_jsx(ActionIcon, {
            icon: item.icon,
            onClick: onActionClick ? function () {
              return onActionClick === null || onActionClick === void 0 ? void 0 : onActionClick({
                item: item,
                key: item.key,
                keyPath: [item.key]
              });
            } : undefined,
            placement: tooltipsPlacement,
            size: "small",
            title: item.label
          }, item.key);
        })]
      });
    }
  });
});
export default ActionIconGroup;