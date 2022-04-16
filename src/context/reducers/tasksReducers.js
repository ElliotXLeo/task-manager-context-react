const tasksReducers = (state, action) => {
  console.log(state, action);

  return ({
    tasks: [...state.tasks, action.payload]
  });
};

export default tasksReducers;