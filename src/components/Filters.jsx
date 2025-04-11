import React from "react";
import { useTasks } from "../context/TaskContext";
import "../style/Filters.css"

const Filters = () => {
  const { filter, setFilter } = useTasks();

  return (
    <div className="filters">
      <button 
        className={filter === "all" ? "active" : ""} 
        onClick={() => setFilter("all")}
      >All</button>
      <button 
        className={filter === "completed" ? "active" : ""} 
        onClick={() => setFilter("completed")}
      >Completed</button>
      <button 
        className={filter === "incomplete" ? "active" : ""} 
        onClick={() => setFilter("incomplete")}
      >Incomplete</button>
    </div>
  );
};

export default Filters;