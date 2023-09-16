import { createContext, useContext } from 'react';

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => useContext(AppContext);

export default ContextProvider;
