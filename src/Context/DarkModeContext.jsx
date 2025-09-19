import { createContext, useState } from "react";
export const darkmodeContext = createContext();

export const Darksetter = ({ children }) => {
  const [dark, setdark] = useState(false);
  return (
    <darkmodeContext.Provider value={{ dark, setdark }}>
      {children}
    </darkmodeContext.Provider>
  );
};
