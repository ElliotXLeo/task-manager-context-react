import { createContext, useReducer, } from "react";
import { v4 } from "uuid";
import tasksReducers from "./reducers/tasksReducers";

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Actualizar GitHub',
      description: 'Actualizar documentación de GitHub',
      done: false
    },
    {
      id: '2',
      title: 'Aprender Redux',
      description: 'Aprender sobre el manejo del estado global con Reduxs',
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
        id: v4(),
        done: false
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

  const toggleDoneTask = (id) => {
    dispatch({
      type: 'tasks/toggle-done',
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        createTask,
        updateTask,
        deleteTask,
        toggleDoneTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};