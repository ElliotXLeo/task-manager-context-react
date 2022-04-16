import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/sections/Header';
import TasksList from './components/tasks/TasksList';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/new-task" element={<h1>New Task</h1>} />
        <Route index element={<TasksList />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
