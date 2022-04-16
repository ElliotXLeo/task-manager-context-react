import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/sections/Header';
import TasksList from './components/tasks/TasksList';
import TasksForm from './components/tasks/TasksForm';
import { ContextProvider } from './context/GlobalContext';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/create-task" element={<TasksForm />} />
          <Route index element={<TasksList />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
