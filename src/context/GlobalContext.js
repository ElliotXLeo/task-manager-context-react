import { createContext } from "react";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      done: false
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      done: false
    }
  ]
};

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={initialState}
    >
      {children}
    </GlobalContext.Provider>
  );
};