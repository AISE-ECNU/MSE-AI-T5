import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["extra"];
import { Divider } from 'antd';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useStore } from "../../../store";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var UserMessageExtra = /*#__PURE__*/memo(function (_ref) {
  var extra = _ref.extra,
    rest = _objectWithoutProperties(_ref, _excluded);
  var hasTranslate = !!(extra !== null && extra !== void 0 && extra.translate);
  var _useStore = useStore(function (s) {
      return [s.messageItemExtraRender];
    }),
    _useStore2 = _slicedToArray(_useStore, 1),
    messageItemExtraRender = _useStore2[0];
  var dom = messageItemExtraRender === null || messageItemExtraRender === void 0 ? void 0 : messageItemExtraRender(_objectSpread({
    extra: extra
  }, rest), 'user');
  if (!dom) return;
  return /*#__PURE__*/_jsxs(Flexbox, {
    gap: 8,
    style: {
      marginTop: hasTranslate ? 8 : 0
    },
    children: [(extra === null || extra === void 0 ? void 0 : extra.translate) && /*#__PURE__*/_jsx("div", {
      children: /*#__PURE__*/_jsx(Divider, {
        style: {
          margin: '12px 0'
        }
      })
    }), dom]
  });
});