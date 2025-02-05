import React, { useEffect, useState } from "react";
import api from "../services/api";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Your Tasks</h1>
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Dashboard;
