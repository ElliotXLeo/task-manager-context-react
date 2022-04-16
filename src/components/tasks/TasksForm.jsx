const TasksForm = () => {
  return (
    <section className="flex flex-col gap-4 items-center w-6/12 mx-auto">
      <h2 className="text-xl font-semibold text-yellow-300">New Task</h2>
      <form className="flex flex-col gap-3 bg-gray-700 w-full p-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-2 outline-none bg-transparent bg-gray-800"
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          className="p-2 outline-none bg-transparent bg-gray-800"
        />
        <button className="bg-green-600 hover:bg-green-500 p-2">
          Create
        </button>
      </form>
    </section>
  );
}

export default TasksForm;