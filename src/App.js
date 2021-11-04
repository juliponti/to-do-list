import List from "./components/List";
import Input from "./components/Input";
import { useState } from "react";
import Img from "./assets/cyborg-octopus.png";
import { ContextProvider } from "./contexts/FirstContext.js";
import "./App.scss";

function App() {
  const [toDos, setToDos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...toDos, inputValue]);
    setInputValue("");
  }

  function removeToDo(toDo) {
    const newList = toDos.filter((item) => item !== toDo);
    setToDos(newList);
  }

  function taskDone(toDo) {}

  const contextValue = {
    removeToDo: removeToDo,
    taskDone: taskDone,
  };

  return (
    <ContextProvider value={contextValue}>
      <div className="app">
        <header className="app-header">
          <div className="text-header__container">
            <h1>• To do list •</h1>
          </div>
        </header>
        <main className="app-main">
          <div className="container">
            <div className="img-container">
              <img src={Img} className="img" alt="octopus" />
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="btn">Agregar Tarea</button>
            </form>
          </div>
          <List toDos={toDos} />
        </main>
      </div>
    </ContextProvider>
  );
}

export default App;
