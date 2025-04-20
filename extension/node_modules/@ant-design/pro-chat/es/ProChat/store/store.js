import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["loading", "initialChats", "chats"];
import isEqual from 'fast-deep-equal';
import { merge } from 'lodash-es';
import { optionalDevtools } from 'zustand-utils';
import { createWithEqualityFn } from 'zustand/traditional';
import { chatAction } from "./action";
import { initialState } from "./initialState";

//  ===============  聚合 createStoreFn ============ //

var vanillaStore = function vanillaStore(_ref) {
  var loading = _ref.loading,
    initialChats = _ref.initialChats,
    chats = _ref.chats,
    props = _objectWithoutProperties(_ref, _excluded);
  return function () {
    // initState = innerState + props

    var finalInitChats = chats !== null && chats !== void 0 ? chats : initialChats;
    var state = merge({}, initialState, _objectSpread({
      init: !loading,
      chats: Array.isArray(finalInitChats) ? finalInitChats : Object.values(finalInitChats || {})
    }, props));
    return _objectSpread(_objectSpread({}, state), chatAction.apply(void 0, arguments));
  };
};
//

// ===============  封装 createStore ============ //

var PRO_CHAT = 'PRO_CHAT';
var isDev = process.env.NODE_ENV === 'development';
export var createStore = function createStore(props) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var devtools = optionalDevtools(options !== false);
  var devtoolOptions = options === false ? undefined : options === true ? {
    name: PRO_CHAT + (isDev ? '_DEV' : '')
  } : options;
  return createWithEqualityFn()(devtools(vanillaStore(props), devtoolOptions), isEqual);
};