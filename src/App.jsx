// App.jsx
import React, { useEffect, useState } from "react";

import "./App.css";
import { TaskProvider } from "./context/TaskContext";
import Home from "./Pages/Home";

const App = () => {
  return (
    <TaskProvider>
        <Home/>
    </TaskProvider>
  );
};

export default App;