import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/sections/Header';
import TasksList from './components/tasks/TasksList';
import TasksForm from './components/tasks/TasksForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/new-task" element={<TasksForm />} />
        <Route index element={<TasksList />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
