import { App } from "antd";
import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    localStorage.clear();
  };
  return (
    <AppContext.Provider value={{ user, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const ContextProvider = () => {
  return useContext(AppContext);
};
