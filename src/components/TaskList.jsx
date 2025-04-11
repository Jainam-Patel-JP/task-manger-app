import React from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";
import "../style/TaskList.css"

const TaskList = () => {
  const { filteredTasks, deleteTask, toggleComplete, updateTask } = useTasks();

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={deleteTask} 
            onToggle={toggleComplete} 
            onUpdate={updateTask} 
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
