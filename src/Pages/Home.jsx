// pages/Home.jsx
import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filters from "../components/Filters";
import "../style/Home.css"


const Home = () => {
  return (
  
      <div className="home">
        <h1>Task Manager</h1>
        <TaskForm />
        <Filters />
        <TaskList />
      </div>
  );
};

export default Home;
