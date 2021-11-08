import "./item.scss";
import { useContext } from "react";
import FirstContext from "../../contexts/FirstContext";

function Item(props) {
  const { toDo } = props;
  const contextValue = useContext(FirstContext);

  return (
    <li className={toDo.done ? "task-done" : "list-item"}>
      {toDo.title}
      <label className="tools-container">
        <input type="checkbox" className="checkbox" />
        <span className="checkmark" onClick={()=>  contextValue.taskDone(toDo)} />
        <button onClick={()=> contextValue.removeToDo(toDo)}>🗑️</button>
      </label>
    </li>
  );
}

export default Item;
