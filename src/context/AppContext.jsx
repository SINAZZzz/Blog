import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [id, setId] = useState(null);
  return (
    <AppContext.Provider value={{ id: id, setId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
