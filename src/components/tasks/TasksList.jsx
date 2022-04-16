import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const TasksList = () => {

  const context = useContext(GlobalContext);
  const { tasks } = context;

  console.log(context);

  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-4 w-6/12 py-4">
        {tasks.map((element) => {
          const { id, title } = element;
          return (
            <div key={id} className="flex justify-between bg-gray-700 p-4 rounded">
              <div>
                <h4>{id}</h4>
                <h5>{title}</h5>
              </div>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TasksList;