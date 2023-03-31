import React, { useState } from "react";
import TodoTask from "./components/TodoTask";
import { ITask } from "./Interfaces";
import "./style.css";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  const addTask = () => {
    const newTask = {
      taskName: task,
    };
    setTodo([...todo, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string) => {
    setTodo(
      todo.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="form">
        <p>MY TODO LİST</p>
        <div className="header">
          <div className="inputContainer">
            <input
              type="text"
              name="task"
              value={task}
              placeholder="Add a task"
              onChange={handleChange}
            />
          </div>
          <button onClick={addTask}>Add</button>
        </div>
        <div className="todoList">
          <h3>What to do?</h3>
          {todo.map((task: ITask, key: number) => {
            return (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
