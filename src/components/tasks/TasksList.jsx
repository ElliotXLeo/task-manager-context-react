import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const TasksList = () => {

  const context = useContext(GlobalContext);
  const { tasks, deleteTask, toggleDoneTask } = context;
  console.log(tasks);
  useEffect(() => {
    console.log('change');
    localStorage.setItem('tasks-task-manager', JSON.stringify({
      tasks
    }));
  }, [tasks])

  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-4 w-8/12 py-4">
        {tasks.map((element) => {
          const { id, title, description, done } = element;
          return (
            <div key={id} className="flex items-center justify-between bg-gray-700 p-4 rounded">
              <div>
                <h4 className="font-semibold text-yellow-300">{title}</h4>
                <h5>{description}</h5>
                <button
                  className="bg-purple-600 hover:bg-purple-500 py-2 px-4"
                  onClick={() => { toggleDoneTask(id) }}
                >
                  {done ? 'Undone' : 'Done'}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to={`/update-task/${id}`}
                  className="bg-gray-600 hover:bg-gray-500 py-2 px-4"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-600 hover:bg-red-500 py-2 px-4"
                  onClick={() => { deleteTask(id) }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TasksList;