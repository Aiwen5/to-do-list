import React, { useState } from 'react';

function TaskForm({ tasks, setTasks }) {
  const [taskData, settaskData] = useState({ taskName: '', completed: false });

  function handleAddTask(e) {
    e.preventDefault();
    if (taskData.taskName) {
      const newTask = { ...taskData, id: tasks.length + 1, completed: false };
      setTasks([...tasks, newTask]);
      settaskData({ taskName: '', completed: false });
    }
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTaskCompletion(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  const newListUI = tasks.map((task) => (
    <div key={task.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '1em' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        disabled={task.completed} // Disable the checkbox if task is completed
      />
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.taskName}
      </p>
      <button className='btn-delete' onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  ));

  return (
    <>
      <form onSubmit={handleAddTask}>
        <input
          type='text'
          value={taskData.taskName}
          onChange={(e) => settaskData({ ...taskData, taskName: e.target.value })}
        />
        <button className='btn-task' type="submit">Add Task</button>
      </form>

      <div>
        {newListUI}
      </div>
    </>
  );
}

export default TaskForm;