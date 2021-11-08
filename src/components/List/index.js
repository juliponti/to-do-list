import Item from "../Item";
import "./list.scss";

function List(props) {
  const { toDos } = props;

  return (
    <ul className="list">
      {toDos.map((toDo) => (
        <Item key={toDo.title} toDo={toDo} />
      ))}
    </ul>
  );
}

export default List;
