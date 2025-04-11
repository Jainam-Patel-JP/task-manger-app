// components/TaskItem.jsx
import React, { useState } from "react";
import "../style/TaskItem.css";

const TaskItem = ({ task, onDelete, onToggle, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleUpdate = () => {
    onUpdate({ ...task, title: editedTitle, description: editedDescription });
    setEditing(false);
  };
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}> 
      {editing ? (
        <div className="edit-mode">
          <input 
            type="text" 
            value={editedTitle} 
            onChange={e => setEditedTitle(e.target.value)} 
          />
          <textarea 
            value={editedDescription} 
            onChange={e => setEditedDescription(e.target.value)} 
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <>
          <h3>{task.title}</h3>
          {task.description && <p>{task.description}</p>}
          <p className="priority">Priority: {task.priority}</p>
          <div className="actions">
            <button onClick={() => onToggle(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;