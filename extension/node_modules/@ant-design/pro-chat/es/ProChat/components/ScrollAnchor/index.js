import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { memo, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useStore } from "../../store";
import { chatSelectors } from "../../store/selectors";
import { jsx as _jsx } from "react/jsx-runtime";
var ChatScrollAnchor = /*#__PURE__*/memo(function (_ref) {
  var target = _ref.target;
  var trackVisibility = useStore(function (s) {
    return !!s.chatLoadingId;
  });
  var str = useStore(chatSelectors.currentChats);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isWindowAvailable = _useState2[0],
    setIsWindowAvailable = _useState2[1];
  useEffect(function () {
    // 检查window对象是否已经可用
    if (typeof window !== 'undefined') {
      setIsWindowAvailable(true);
    }
  }, []);

  // 获取上方列表的实例化 ref，会传入给 useAtBottom 用于判断当前是否在滚动
  var current = useMemo(function () {
    if (target.current) {
      return target.current;
    }
    return document.body;
  }, [isWindowAvailable]);
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    scrollOffset = _useState4[0],
    setScrollOffset = _useState4[1];
  useEffect(function () {
    if (isWindowAvailable) {
      // 如果是移动端，可能100太多了，认为超过 1/3 即可，PC默认100
      setScrollOffset(window.innerHeight / 3 > 100 ? 100 : window.innerHeight / 4);
    }
  }, [isWindowAvailable]);
  var _useInView = useInView({
      root: target.current,
      delay: 100,
      rootMargin: "0px 0px ".concat(scrollOffset, "px 0px"),
      trackVisibility: trackVisibility
    }),
    ref = _useInView.ref,
    entry = _useInView.entry,
    inView = _useInView.inView;
  useEffect(function () {
    if (trackVisibility && inView) {
      current === null || current === void 0 || current.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: (current === null || current === void 0 ? void 0 : current.scrollHeight) || 99999
      });
    }
  }, [inView, entry, trackVisibility, str]);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    style: {
      height: 1,
      width: '100%'
    }
  });
});
export default ChatScrollAnchor;