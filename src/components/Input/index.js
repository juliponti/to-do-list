import "./input.scss";

function Input(props) {
  const { value, onChange } = props;

  return (
    <input
      type="text"
      placeholder="Escribir nueva tarea ..."
      className="input"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
