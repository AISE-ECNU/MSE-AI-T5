import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["extra"];
import Tag from "../../../../components/Tag";
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useStore } from "../../../store";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var AssistantMessageExtra = /*#__PURE__*/memo(function (_ref) {
  var extra = _ref.extra,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useStore = useStore(function (s) {
      return [s.config.model, s.messageItemExtraRender];
    }),
    _useStore2 = _slicedToArray(_useStore, 2),
    model = _useStore2[0],
    messageItemExtraRender = _useStore2[1];
  var showModelTag = (extra === null || extra === void 0 ? void 0 : extra.fromModel) && model !== (extra === null || extra === void 0 ? void 0 : extra.fromModel);
  var hasTranslate = !!(extra !== null && extra !== void 0 && extra.translate);
  var showExtra = showModelTag || hasTranslate;
  var dom = messageItemExtraRender === null || messageItemExtraRender === void 0 ? void 0 : messageItemExtraRender(_objectSpread({
    extra: extra
  }, rest), 'assistant');
  if (!showExtra && !dom) return;
  return /*#__PURE__*/_jsxs(Flexbox, {
    gap: 8,
    style: {
      marginTop: 8
    },
    children: [showModelTag && /*#__PURE__*/_jsx("div", {
      children: /*#__PURE__*/_jsx(Tag, {
        children: extra === null || extra === void 0 ? void 0 : extra.fromModel
      })
    }), dom]
  });
});