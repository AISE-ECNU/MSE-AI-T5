import emojiRegex from 'emoji-regex';
export var getEmoji = function getEmoji(emoji) {
  var _emoji$match;
  var regex = emojiRegex();
  return (_emoji$match = emoji.match(regex)) === null || _emoji$match === void 0 ? void 0 : _emoji$match[0];
};