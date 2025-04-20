import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from 'react';
export var useAtBottom = function useAtBottom() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var target = arguments.length > 1 ? arguments[1] : undefined;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAtBottom = _useState2[0],
    setIsAtBottom = _useState2[1];
  useEffect(function () {
    if (target) {
      var handleScroll = function handleScroll() {
        setIsAtBottom(target.scrollTop + target.clientHeight >= target.scrollHeight - offset);
      };
      target.addEventListener('scroll', handleScroll, {
        passive: true
      });
      handleScroll();
      return function () {
        target.removeEventListener('scroll', handleScroll);
      };
    } else {
      var _handleScroll = function _handleScroll() {
        setIsAtBottom(window.innerHeight + window.scrollY >= document.body.offsetHeight - offset);
      };
      window.addEventListener('scroll', _handleScroll, {
        passive: true
      });
      _handleScroll();
      return function () {
        window.removeEventListener('scroll', _handleScroll);
      };
    }
  }, [offset, target]);
  return isAtBottom;
};