const tasksReducers = (state, action) => {
  const { tasks } = state;
  const { type, payload } = action;

  switch (type) {
    case 'tasks/create':
      return ({
        tasks: [...tasks, payload]
      });
    case 'tasks/update':
      return ({
        tasks: [...tasks.map((task) => {
          if (task.id === payload.task.id) {
            task = payload.task
          };
          return task
        })]
      });
    case 'tasks/delete':
      return ({
        tasks: [...tasks.filter((task) => {
          return (task.id !== payload);
        })]
      });
    case 'tasks/toggle-done':
      return ({
        tasks: [...tasks.map((task) => {
          return task.id === payload ? { ...task, done: !task.done } : task
        })]
      });
    default:
      return state;
  }
};

export default tasksReducers;