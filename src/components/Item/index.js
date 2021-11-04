import "./item.scss";
import { useContext } from "react";
import FirstContext from "../../contexts/FirstContext";

function Item(props) {
  const { toDo, key } = props;
  const contextValue = useContext(FirstContext);

  return (
    <li key={key} className="list-item">
      {toDo}
      <label className="tools-container">
        <input type="checkbox" className="checkbox" />
        <span className="checkmark" onClick={contextValue.taskDone} />
        <button onClick={contextValue.removeToDo}>🗑️</button>
      </label>
    </li>
  );
}

export default Item;
