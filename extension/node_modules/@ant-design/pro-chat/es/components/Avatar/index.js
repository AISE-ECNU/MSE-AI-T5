import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "avatar", "title", "size", "shape", "background", "onClick", "style"];
import { Avatar as AntAvatar } from 'antd';
import { memo, useMemo } from 'react';
import Emoji from "../../Emoji";
import { getEmoji } from "./getEmojiByCharacter";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @module Avatar
 * @description 头像组件，用于显示用户头像信息
 * @exports Avatar
 * @component
 *
 * @param {string} [avatar] - 头像图片的URL或base64数据
 * @param {string} [background] - 头像的背景颜色
 * @param {'circle' | 'square'} [shape='circle'] - 头像的形状，默认为圆形
 * @param {number} [size=40] - 头像的尺寸（像素）
 * @param {string} [title] - 如果未提供头像，则显示的标题文本
 * @param {string} [className] - 自定义的CSS类名
 * @param {Function} [onClick] - 点击头像时触发的回调函数
 * @param {Object} [style] - 自定义的行内样式
 * @param {Object} [props] - 其他传递给AntAvatar组件的属性
 *
 */
var Avatar = /*#__PURE__*/memo(function (_ref) {
  var className = _ref.className,
    avatar = _ref.avatar,
    title = _ref.title,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 40 : _ref$size,
    _ref$shape = _ref.shape,
    shape = _ref$shape === void 0 ? 'circle' : _ref$shape,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? 'rgba(0,0,0,0)' : _ref$background,
    onClick = _ref.onClick,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);
  var isImage = Boolean(avatar && ['/', 'http', 'data:'].some(function (index) {
    return avatar.startsWith(index);
  }));
  var isBase64 = Boolean(avatar === null || avatar === void 0 ? void 0 : avatar.startsWith('data'));
  var emoji = useMemo(function () {
    return avatar && !isImage && getEmoji(avatar);
  }, [avatar]);
  var _useStyles = useStyles({
      background: background,
      isEmoji: Boolean(emoji),
      size: size
    }),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  var text = String(isImage ? title : avatar);
  var avatarProps = {
    className: cx(styles.avatar, className),
    shape: shape,
    size: size,
    style: onClick ? style : _objectSpread({
      cursor: 'default'
    }, style)
  };
  return isImage ? /*#__PURE__*/_jsx(AntAvatar, _objectSpread(_objectSpread({
    src: isBase64 ? avatar : /*#__PURE__*/_jsx("img", {
      src: avatar,
      alt: "avatar"
    })
  }, avatarProps), props)) : /*#__PURE__*/_jsx(AntAvatar, _objectSpread(_objectSpread(_objectSpread({}, avatarProps), props), {}, {
    children: emoji ? /*#__PURE__*/_jsx(Emoji, {
      emoji: emoji,
      size: size * 0.8
    }) : text === null || text === void 0 ? void 0 : text.toUpperCase().slice(0, 2)
  }));
});
export default Avatar;