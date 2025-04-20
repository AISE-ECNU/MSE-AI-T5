import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Button } from 'antd';
import { ListEnd } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from "../Icon";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var BackBottom = function BackBottom(props) {
  var _ref = props || {},
    _ref$visibilityHeight = _ref.visibilityHeight,
    visibilityHeight = _ref$visibilityHeight === void 0 ? 240 : _ref$visibilityHeight,
    target = _ref.target,
    onClick = _ref.onClick,
    style = _ref.style,
    className = _ref.className,
    text = _ref.text,
    render = _ref.render,
    onScroll = _ref.onScroll,
    _ref$alwaysShow = _ref.alwaysShow,
    alwaysShow = _ref$alwaysShow === void 0 ? false : _ref$alwaysShow;
  var _useState = useState(alwaysShow),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useStyles = useStyles(visible),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  var ref = useRef(null);
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isWindowAvailable = _useState4[0],
    setIsWindowAvailable = _useState4[1];
  useEffect(function () {
    // 检查window对象是否已经可用
    if (typeof window !== 'undefined') {
      setIsWindowAvailable(true);
    }
  }, []);
  var current = useMemo(function () {
    if (target.current) {
      return target.current;
    }
    return document.body;
  }, [isWindowAvailable]);
  var scrollHeight = (current === null || current === void 0 ? void 0 : current.scrollHeight) || 0;
  var clientHeight = (current === null || current === void 0 ? void 0 : current.clientHeight) || 0;
  var _useState5 = useState({
      top: 0,
      left: 0
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    scroll = _useState6[0],
    setScroll = _useState6[1];
  var timeRef = useRef(null);
  useEffect(function () {
    var _current$addEventList;
    if (typeof window === 'undefined') return;
    if (typeof current === 'undefined') return;
    var scroll = function scroll(event) {
      onScroll === null || onScroll === void 0 || onScroll(event);
      timeRef.current = window.setTimeout(function () {
        if (!alwaysShow) {
          setVisible((current === null || current === void 0 ? void 0 : current.scrollTop) + clientHeight + visibilityHeight < scrollHeight);
        }
        setScroll({
          top: current === null || current === void 0 ? void 0 : current.scrollTop,
          left: current === null || current === void 0 ? void 0 : current.scrollLeft
        });
      }, 60);
    };
    current === null || current === void 0 || (_current$addEventList = current.addEventListener) === null || _current$addEventList === void 0 || _current$addEventList.call(current, 'scroll', scroll, {
      passive: true
    });
    return function () {
      var _current$removeEventL;
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
      current === null || current === void 0 || (_current$removeEventL = current.removeEventListener) === null || _current$removeEventL === void 0 || _current$removeEventL.call(current, 'scroll', scroll);
    };
  }, [current]);
  useEffect(function () {
    if (!alwaysShow) {
      setVisible((scroll === null || scroll === void 0 ? void 0 : scroll.top) + clientHeight + visibilityHeight < scrollHeight);
    }
  }, [scrollHeight, scroll, visibilityHeight, current]);
  var scrollToBottom = function scrollToBottom(e) {
    var _current;
    target === null || target === void 0 || (_current = target.current) === null || _current === void 0 || _current.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: scrollHeight
    });
    onClick === null || onClick === void 0 || onClick(e);
  };

  /**
   * @description
   * 为了解决在使用了 ProChatProvider 的情况下，BackBottom 无法正常工作的问题
   */
  useEffect(function () {
    setTimeout(function () {
      var _current2;
      target === null || target === void 0 || (_current2 = target.current) === null || _current2 === void 0 || _current2.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: scrollHeight
      });
    }, 16);
  }, []);
  var defauleDom = /*#__PURE__*/_jsx(Button, {
    className: cx(styles, className),
    icon: /*#__PURE__*/_jsx(Icon, {
      icon: ListEnd
    }),
    onClick: scrollToBottom,
    ref: ref,
    size: 'small',
    style: _objectSpread({
      bottom: 18,
      position: 'absolute',
      right: 16
    }, style),
    children: text || 'Back to bottom'
  });
  if (render) return render(defauleDom, scrollToBottom, props);
  return defauleDom;
};
export default BackBottom;