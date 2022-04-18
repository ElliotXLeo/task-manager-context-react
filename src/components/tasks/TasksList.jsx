import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const TasksList = () => {

  const context = useContext(GlobalContext);
  const { tasks, deleteTask } = context;

  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-4 w-6/12 py-4">
        {tasks.map((element) => {
          const { id, title, description } = element;
          return (
            <div key={id} className="flex items-center justify-between bg-gray-700 p-4 rounded">
              <div>
                <h4>{title}</h4>
                <h5>{description}</h5>
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