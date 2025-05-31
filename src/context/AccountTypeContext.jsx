import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const AccountTypeContext = createContext();

export const useAccountType = () => useContext(AccountTypeContext);

export function AccountTypeProvider({ children }) {
  const [searchParams] = useSearchParams();
  const [accountType, setAccountType] = useState(""); 

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "ngo" || type === "user") {
      setAccountType(type);
    }
  }, [searchParams]);

  return (
    <AccountTypeContext.Provider value={{ accountType, setAccountType }}>
      {children}
    </AccountTypeContext.Provider>
  );
}
