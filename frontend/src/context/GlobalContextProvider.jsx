import React from "react";
import { useState } from "react";

const GlobalContext = React.createContext({
  isLogged: false,
});

function GlobalContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return React.useContext(GlobalContext);
}

export default GlobalContextProvider;
