import "./input.scss";

function CheckboxInput() {
  return (
    <div className="show-password-checkbox">
      <input type="checkbox" name="showPassword" value="Show Password" />
      <label>Show Password</label>
    </div>
  );
}

export default CheckboxInput;
