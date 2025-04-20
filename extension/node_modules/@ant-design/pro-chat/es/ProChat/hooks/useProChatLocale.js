import { gLocaleObject } from "../../locale";
import { useMemo } from 'react';
import { useStore } from "../store";
var useProChatLocale = function useProChatLocale() {
  var locale = useStore(function (s) {
    return s.locale;
  });
  var localeObject = useMemo(function () {
    return gLocaleObject(locale);
  }, [locale]);
  return {
    locale: locale,
    localeObject: localeObject
  };
};
export default useProChatLocale;