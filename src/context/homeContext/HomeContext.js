import React, { useState, createContext } from "react";

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <HomeContext.Provider
      value={{
        selectedFile,
        setSelectedFile,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
