const tasksReducers = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case 'tasks/add':
      return ({
        tasks: [...state.tasks, action.payload]
      });
    case 'tasks/delete':
      return ({
        tasks: [...state.tasks.filter((task) => {
          return (task.id !== action.payload);
        }
        )]
      });
    default:
      break;
  }
  return ({
  });
};

export default tasksReducers;