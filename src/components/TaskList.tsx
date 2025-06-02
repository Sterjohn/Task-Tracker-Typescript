import React from 'react'
import { Task } from '../App'
import TaskItem from './TaskItem'

interface Props {
  tasks: Task[]
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

const TaskList: React.FC<Props> = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ul>
  )
}

export default TaskList
