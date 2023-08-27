import "./checkbox.scss";
// import { useState } from "react";

function Checkbox(props) {
  // let checked = false;

  return (
    <div className="show-password-checkbox">
      <input
        type="checkbox"
        name="showPassword"
        value="Show Password"
        onClick={props.onClickFunc}
        // onClick={() => {
        //   checked = checked ? false : true;
        //   console.log(checked);
        // }}
      />
      <label>Show Password</label>
    </div>
  );
}

export default Checkbox;
