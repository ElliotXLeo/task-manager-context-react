const tasksReducers = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case 'tasks/create':
      return ({
        tasks: [...state.tasks, action.payload]
      });
    case 'tasks/update':
      return ({
        tasks: [...state.tasks.map((task) => {
          if (task.id === action.payload.task.id) {
            task = action.payload.task
          };
          return task
        })]
      });
    case 'tasks/delete':
      return ({
        tasks: [...state.tasks.filter((task) => {
          return (task.id !== action.payload);
        })]
      });
    default:
      return state;
  }
};

export default tasksReducers;