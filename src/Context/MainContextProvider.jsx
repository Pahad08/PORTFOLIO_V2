import { createContext, useContext, useState } from "react";

const MainContext = createContext({
  activeNav: null,
  setActiveNav: () => {},
});

export const MainContextProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("about");

  return (
    <MainContext.Provider
      value={{
        activeNav,
        setActiveNav,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};
