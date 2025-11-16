"use client";

import { addNewUserInitialState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [openUp, setOpenUp] = useState(false);
  const [addNewUserFormData, setNewUserFormData] = useState(
    addNewUserInitialState
  );
  const [currentEditId, setCurrentEditId] = useState(null);

  return (
    <UserContext.Provider
      value={{
        openUp,
        setOpenUp,
        addNewUserFormData,
        setNewUserFormData,
        currentEditId,
        setCurrentEditId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
