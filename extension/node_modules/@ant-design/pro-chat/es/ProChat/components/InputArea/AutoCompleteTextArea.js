import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["disabled", "autoCompleteProps"];
import { AutoComplete, Input } from 'antd';
import React, { useState } from 'react';
import { useStore } from "../../store";
import { jsx as _jsx } from "react/jsx-runtime";
export var AutoCompleteTextArea = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useStore = useStore(function (s) {
      return [s.autocompleteRequest];
    }),
    _useStore2 = _slicedToArray(_useStore, 1),
    autocompleteRequest = _useStore2[0];
  var disabled = props.disabled,
    _props$autoCompletePr = props.autoCompleteProps,
    autoCompleteProps = _props$autoCompletePr === void 0 ? {} : _props$autoCompletePr,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  return /*#__PURE__*/_jsx(AutoComplete, _objectSpread(_objectSpread({
    className: props.className,
    options: options,
    style: {
      height: 'max-content'
    },
    disabled: disabled,
    open: open,
    onDropdownVisibleChange: function onDropdownVisibleChange(open) {
      setOpen(open);
    },
    value: props.value,
    onSelect: function onSelect(value) {
      var _props$onChange;
      (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, {
        target: {
          value: value
        }
      });
      setOptions([]);
    },
    onSearch: ( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return autocompleteRequest === null || autocompleteRequest === void 0 ? void 0 : autocompleteRequest(value);
            case 2:
              result = _context.sent;
              setOptions(result || []);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())
  }, autoCompleteProps), {}, {
    children: /*#__PURE__*/_jsx(Input.TextArea, _objectSpread(_objectSpread({
      size: "large"
    }, rest), {}, {
      ref: ref,
      disabled: disabled,
      className: "".concat(props.className, "-textarea"),
      onFocus: function onFocus(e) {
        var _props$onFocus;
        setOpen(false);
        (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, e);
      },
      onPressEnter: function onPressEnter(e) {
        var _props$onPressEnter;
        if (open && options.length > 0) return;
        (_props$onPressEnter = props.onPressEnter) === null || _props$onPressEnter === void 0 || _props$onPressEnter.call(props, e);
      }
    }))
  }));
});