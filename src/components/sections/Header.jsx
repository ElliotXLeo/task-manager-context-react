import { NavLink } from "react-router-dom";
import { IoMdAdd } from 'react-icons/io';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-2">
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
          return `flex items-center gap-1 bg-green-500 hover:bg-green-600 font-semibold rounded py-2 px-4 ${(isActive && "text-yellow-300")}`;
        }}
      >
        <IoMdAdd />
        Add Task
      </NavLink>
    </header>
  );
}

export default Header;