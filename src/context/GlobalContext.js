import { createContext, useReducer, } from "react";
import tasksReducers from "./reducers/tasksReducers";

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

  const [state, dispatch] = useReducer(tasksReducers, initialState);

  const createTask = (task) => {
    const { title, description } = task;
    dispatch({
      type: 'tasks/add',
      payload: {
        id: 3,
        title,
        description,
        done: false
      }
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        createTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};