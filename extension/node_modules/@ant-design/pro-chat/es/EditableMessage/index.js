import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useMergedState } from 'rc-util';
import { memo } from 'react';
import MessageInput from "../MessageInput";
import MessageModal from "../MessageModal";
import { Markdown } from '@ant-design/pro-editor';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var EditableMessage = /*#__PURE__*/memo(function (_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange,
    _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    onEditingChange = _ref.onEditingChange,
    editing = _ref.editing,
    openModal = _ref.openModal,
    onOpenChange = _ref.onOpenChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Type something...' : _ref$placeholder,
    _ref$showEditWhenEmpt = _ref.showEditWhenEmpty,
    showEditWhenEmpty = _ref$showEditWhenEmpt === void 0 ? false : _ref$showEditWhenEmpt,
    styles = _ref.styles,
    height = _ref.height,
    inputType = _ref.inputType,
    editButtonSize = _ref.editButtonSize,
    text = _ref.text,
    model = _ref.model,
    markdownProps = _ref.markdownProps;
  var _useMergedState = useMergedState(false, {
      onChange: onEditingChange,
      value: editing
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    isEdit = _useMergedState2[0],
    setTyping = _useMergedState2[1];
  var _useMergedState3 = useMergedState(false, {
      onChange: onOpenChange,
      value: openModal
    }),
    _useMergedState4 = _slicedToArray(_useMergedState3, 2),
    expand = _useMergedState4[0],
    setExpand = _useMergedState4[1];
  var isAutoSize = height === 'auto';
  var input = /*#__PURE__*/_jsx(MessageInput, {
    className: classNames === null || classNames === void 0 ? void 0 : classNames.input,
    classNames: {
      textarea: classNames === null || classNames === void 0 ? void 0 : classNames.textarea
    },
    defaultValue: value,
    editButtonSize: editButtonSize,
    height: height,
    onCancel: function onCancel() {
      return setTyping(false);
    },
    onConfirm: function onConfirm(text) {
      _onChange === null || _onChange === void 0 || _onChange(text);
      setTyping(false);
    },
    placeholder: placeholder,
    style: styles === null || styles === void 0 ? void 0 : styles.input,
    text: text,
    textareaClassname: classNames === null || classNames === void 0 ? void 0 : classNames.input,
    type: inputType
  });
  if (!value && showEditWhenEmpty) return input;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [!expand && isEdit ? input : /*#__PURE__*/_jsx(Markdown, _objectSpread(_objectSpread({}, markdownProps), {}, {
      style: _objectSpread({
        height: isAutoSize ? 'unset' : height,
        overflowX: 'hidden',
        overflowY: 'auto'
      }, markdownProps === null || markdownProps === void 0 ? void 0 : markdownProps.style),
      children: value || placeholder
    })), /*#__PURE__*/_jsx(MessageModal, {
      editing: isEdit,
      extra: model === null || model === void 0 ? void 0 : model.extra,
      footer: model === null || model === void 0 ? void 0 : model.footer,
      height: height,
      onChange: function onChange(text) {
        return _onChange === null || _onChange === void 0 ? void 0 : _onChange(text);
      },
      onEditingChange: setTyping,
      onOpenChange: function onOpenChange(e) {
        setExpand(e);
        setTyping(false);
      },
      markdownProps: markdownProps,
      open: expand,
      placeholder: placeholder,
      text: text,
      value: value
    })]
  });
});
export default EditableMessage;