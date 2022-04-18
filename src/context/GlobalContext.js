import { createContext, useReducer, } from "react";
import { v4 } from "uuid";
import tasksReducers from "./reducers/tasksReducers";

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Title 1',
      description: 'Description 1',
      done: false
    },
    {
      id: '2',
      title: 'Title 2',
      description: 'Description 2',
      done: false
    }
  ]
};

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(tasksReducers, initialState);

  const createTask = (task) => {
    dispatch({
      type: 'tasks/create',
      payload: {
        ...task,
        id: v4()
      }
    });
  }

  const updateTask = (task) => {
    dispatch({
      type: 'tasks/update',
      payload: {
        task
      }
    });
  }

  const deleteTask = (id) => {
    dispatch({
      type: 'tasks/delete',
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        createTask,
        updateTask,
        deleteTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};