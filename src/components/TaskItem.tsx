import React from 'react'
import { Task } from '../App'

interface Props {
  task: Task
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

const TaskItem: React.FC<Props> = ({ task, toggleTask, deleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '0.5rem' }}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '1rem' }}>Delete</button>
    </li>
  )
}

export default TaskItem
