import { createContext } from "react";

export const GlobalContext = createContext({
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
});