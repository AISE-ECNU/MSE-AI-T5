export var setNamespace = function setNamespace(namespace) {
  return function (type, payload) {
    var name = [namespace, type].filter(Boolean).join('/');
    return payload ? {
      payload: payload,
      type: name
    } : name;
  };
};