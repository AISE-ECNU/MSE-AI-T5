import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useResponsive } from 'antd-style';
import { useMergedState } from 'rc-util';
import { memo } from 'react';
import MessageInput from "../MessageInput";
import { Markdown } from '@ant-design/pro-editor';
import { Modal } from 'antd';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var MessageModal = /*#__PURE__*/memo(function (_ref) {
  var editing = _ref.editing,
    open = _ref.open,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 'auto' : _ref$height,
    onOpenChange = _ref.onOpenChange,
    onEditingChange = _ref.onEditingChange,
    placeholder = _ref.placeholder,
    value = _ref.value,
    onChange = _ref.onChange,
    text = _ref.text,
    footer = _ref.footer,
    extra = _ref.extra,
    markdownProps = _ref.markdownProps;
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var _useMergedState = useMergedState(false, {
      onChange: onEditingChange,
      value: editing
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    isEdit = _useMergedState2[0],
    setTyping = _useMergedState2[1];
  var _useMergedState3 = useMergedState(false, {
      onChange: onOpenChange,
      value: open
    }),
    _useMergedState4 = _slicedToArray(_useMergedState3, 2),
    expand = _useMergedState4[0],
    setExpand = _useMergedState4[1];
  var isAutoSize = height === 'auto';
  var markdownStyle = {
    height: isAutoSize ? 'unset' : height,
    overflowX: 'hidden',
    overflowY: 'auto'
  };
  return /*#__PURE__*/_jsx(Modal, {
    cancelText: (text === null || text === void 0 ? void 0 : text.cancel) || 'Cancel',
    footer: isEdit ? null : footer,
    okText: (text === null || text === void 0 ? void 0 : text.edit) || 'Edit',
    onCancel: function onCancel() {
      return setExpand(false);
    },
    onOk: function onOk() {
      return setTyping(true);
    },
    open: expand,
    styles: mobile ? {
      body: {
        padding: 16
      }
    } : {},
    title: (text === null || text === void 0 ? void 0 : text.title) || 'Prompt',
    children: isEdit ? /*#__PURE__*/_jsx(MessageInput, {
      defaultValue: value,
      height: height,
      onCancel: function onCancel() {
        return setTyping(false);
      },
      onConfirm: function onConfirm(text) {
        setTyping(false);
        onChange === null || onChange === void 0 || onChange(text);
      },
      placeholder: placeholder,
      text: {
        cancel: text === null || text === void 0 ? void 0 : text.cancel,
        confirm: text === null || text === void 0 ? void 0 : text.confirm
      },
      type: 'block'
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [extra, /*#__PURE__*/_jsx(Markdown, _objectSpread(_objectSpread({}, markdownProps), {}, {
        style: value ? _objectSpread(_objectSpread({}, markdownStyle), markdownProps === null || markdownProps === void 0 ? void 0 : markdownProps.style) : _objectSpread(_objectSpread(_objectSpread({}, markdownStyle), markdownProps === null || markdownProps === void 0 ? void 0 : markdownProps.style), {}, {
          opacity: 0.5
        }),
        children: String(value || placeholder)
      }))]
    })
  });
});
export default MessageModal;