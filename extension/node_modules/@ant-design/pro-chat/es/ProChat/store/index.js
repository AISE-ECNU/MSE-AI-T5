import { createContext } from 'zustand-utils';
export * from "./store";
var _createContext = createContext(),
  useStore = _createContext.useStore,
  useStoreApi = _createContext.useStoreApi,
  Provider = _createContext.Provider;
export { useStore, useStoreApi, Provider };