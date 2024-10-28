import { useState } from 'react';
import TaskForm from './components/TaskForm'; 
import './App.css';

function App() {
  const initialData = [
    {
      id: 1,
      taskName: 'Code final front end website',
      completed: false
    },
    {
      id: 2,
      taskName: 'Pet my cat',
      completed: false
    },
  ];

  const [tasks, setTasks] = useState(initialData);
  const [filter, setFilter] = useState('all');

  const incompleteTasks = tasks.filter(task => !task.completed).length;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <>
      <h1>To Do List</h1>
      <h2>{incompleteTasks} tasks remaining</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button 
          className={`btn-filter ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`btn-filter ${filter === 'pending' ? 'active' : ''}`} 
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
        <button 
          className={`btn-filter ${filter === 'completed' ? 'active' : ''}`} 
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <TaskForm tasks={filteredTasks} setTasks={setTasks} />
    </>
  );
}

export default App;