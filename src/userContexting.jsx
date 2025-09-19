import { createContext, useState } from "react";
export const UsercontextR = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Rakesh", age: 25 });
  return (
    <UsercontextR.Provider value={{ user, setUser }}>
      {children}
    </UsercontextR.Provider>
  );
}
