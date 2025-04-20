import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { createStyles, cx } from 'antd-style';
import { Flexbox } from 'react-layout-kit';
import ActionIcon from "../../../ActionIcon";
import { ConfigProvider, Popconfirm } from 'antd';
import { Trash2 } from 'lucide-react';
import useProChatLocale from "../../hooks/useProChatLocale";
import { useStore } from "../../store";
import { jsx as _jsx } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token;
  return {
    extra: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), token.colorTextTertiary)
  };
});
export var ActionBar = function ActionBar(_ref2) {
  var _actionsRender;
  var className = _ref2.className;
  var _useStore = useStore(function (s) {
      var _s$actions, _s$actions2;
      return [s.clearMessage, (_s$actions = s.actions) === null || _s$actions === void 0 ? void 0 : _s$actions.render, (_s$actions2 = s.actions) === null || _s$actions2 === void 0 ? void 0 : _s$actions2.flexConfig];
    }),
    _useStore2 = _slicedToArray(_useStore, 3),
    clearMessage = _useStore2[0],
    actionsRender = _useStore2[1],
    flexConfig = _useStore2[2];
  var _useProChatLocale = useProChatLocale(),
    localeObject = _useProChatLocale.localeObject;
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    theme = _useStyles.theme;
  var defaultDoms = [/*#__PURE__*/_jsx(Popconfirm, {
    title: localeObject.clearModalTitle,
    okButtonProps: {
      danger: true
    },
    okText: localeObject.clearDialogue,
    cancelText: localeObject.cancel,
    onConfirm: function onConfirm() {
      clearMessage();
    },
    children: /*#__PURE__*/_jsx(ActionIcon, {
      title: localeObject.clearCurrentDialogue,
      icon: Trash2
    })
  }, 'clear')];
  return /*#__PURE__*/_jsx(ConfigProvider, {
    theme: {
      token: {
        colorText: theme.colorTextSecondary
      }
    },
    children: /*#__PURE__*/_jsx(Flexbox, _objectSpread(_objectSpread({
      align: 'center',
      direction: 'horizontal-reverse',
      paddingInline: 12,
      className: cx(styles.extra, className),
      gap: 8
    }, flexConfig), {}, {
      children: (_actionsRender = actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(defaultDoms)) !== null && _actionsRender !== void 0 ? _actionsRender : defaultDoms
    }))
  });
};
export default ActionBar;