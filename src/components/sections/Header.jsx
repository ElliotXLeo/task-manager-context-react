import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center py-2">
      {/* <NavLink to="/" className={`text-2xl`}> */}
      <NavLink
        to="/"
        className={({ isActive }) => {
          return `text-2xl ${(isActive && "text-yellow-300")}`;
        }}
      >
        📋 Taks 📋
      </NavLink>
      <NavLink
        to="/new-task"
        className={({ isActive }) => {
          return `flex-1 text-right px-4 py-2 ${(isActive && "text-yellow-300")}`;
        }}
      >
        <button className="bg-green-500 hover:bg-green-600 font-semibold rounded py-2 px-4">
          Add Task
        </button>
      </NavLink>
    </header>
  );
}

export default Header;