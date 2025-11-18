"use client";

import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function ContextProvider({ children }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  return (
    <UserContext.Provider
      value={{ openDialog, setOpenDialog, editingUser, setEditingUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
