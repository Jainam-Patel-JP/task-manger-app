// utils/localStorage.js
export const getTasks = () => {
    try {
      const data = localStorage.getItem("tasks");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return [];
    }
  };
  
  export const saveTasks = (tasks) => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  };