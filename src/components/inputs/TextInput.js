import "./input.scss";

function TextInput(props) {
  return (
    <div className="form-control">
      <label>{props.title}</label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChangeFunc}
        placeholder={props.placeholder || ""}
      />
    </div>
  );
}

export default TextInput;
