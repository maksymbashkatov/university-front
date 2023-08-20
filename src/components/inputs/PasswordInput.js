import "./input.scss";

function PasswordInput(props) {
  return (
    <div className="form-control">
      <label>{props.title}</label>
      <input
        type="password"
        name={props.name}
        value={props.value}
        onChange={props.onChangeFunc}
      />
    </div>
  );
}

export default PasswordInput;
