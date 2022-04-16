import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const TasksList = () => {

  const context = useContext(GlobalContext);
  const { tasks, deleteTask } = context;

  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-4 w-6/12 py-4">
        {tasks.map((element) => {
          const { id, title } = element;
          return (
            <div key={id} className="flex items-center justify-between bg-gray-700 p-4 rounded">
              <div>
                <h4>{id}</h4>
                <h5>{title}</h5>
              </div>
              <div>
                <button>Edit</button>
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