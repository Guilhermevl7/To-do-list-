import React, { useState } from "react";
import TodoList from "./components/TodoList";
import ChuckNorrisPhrase from "./components/ChuckNorrisPhrase";
import coraçao from "./assets/coraçao.png";

function App() {
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleTaskCompletion = () => {
    setCompletedTasks((prevCount) => prevCount + 1);
  };

  return (
    <div className="App-container">
      <div className="title">
        <strong>To</strong>
        <span>day</span>
      </div>
      <div className="motivational-phrase">
        Wake up, go ahead, do the thing not tomorrow, do <strong>to</strong>
        <span>day</span>.
      </div>

      <div className="task-complete">
        <h1>Finished tasks quantity</h1> <br />
        <div className="completed-tasks">{completedTasks}</div>
      </div>

      <div className="container-todo">
        <TodoList onTaskComplete={handleTaskCompletion} />
      </div>

      <div className="chuckNorris-phrase">
        <ChuckNorrisPhrase />
      </div>
      <p className="by-chuck">By Chuck Norris.</p>
      <footer>
        @Did from
        <img
          src={coraçao}
          alt="coraçao"
          style={{ marginBottom: "-7px", color: "#FFFFFF99" }}
        />
        by Guilherme Vieira
      </footer>
    </div>
  );
}

export default App;