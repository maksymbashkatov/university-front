import "./input.scss";
import { useState } from "react";

function Input(props) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="form-control">
      <label
        for={props.for || props.name}
        style={{ color: focused ? "#0101ff" : "" }}
      >
        {props.title}
      </label>
      <input
        id={props.id || props.name}
        type={props.type || props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChangeFunc}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={props.placeholder || ""}
      />
    </div>
  );
}

export default Input;
