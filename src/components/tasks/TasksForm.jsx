import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const TasksForm = () => {

  const params = useParams();

  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const { createTask, updateTask, tasks } = context;

  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
    done: false
  })

  const { title, description } = task;

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubtmit = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task); 
    } else {
      createTask(task);
    }
    navigate('/');
  }

  useEffect(() => {
    const taskToEdit = tasks.filter((task) => {
      return (task.id === params.taskId);
    });

    if (Object.keys(taskToEdit).length > 0) {
      const { id, title, description, done } = taskToEdit[0];
      setTask({
        id,
        title,
        description,
        done
      });
    }
  }, [tasks, params.taskId]);

  return (
    <section className="flex flex-col gap-4 items-center w-6/12 mx-auto">
      <h2 className="text-xl font-semibold text-yellow-300">
        {task.id ? 'Update Task' : 'Create Task'}
      </h2>
      <form
        className="flex flex-col gap-3 bg-gray-700 w-full p-4"
        onSubmit={handleSubtmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-2 outline-none bg-transparent bg-gray-800"
          value={title}
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          className="p-2 outline-none bg-transparent bg-gray-800"
          value={description}
          onChange={handleChange}
          required
        />
        <button className="bg-green-600 hover:bg-green-500 p-2">
          {task.id ? 'Update' : 'Create'}
        </button>
      </form>
    </section>
  );
}

export default TasksForm;