import './checkbox.scss';

export default function Checkbox(props) {
  const { onClick } = props;

  return (
    <div className="show-password-checkbox">
      <input
        type="checkbox"
        name="showPassword"
        value="Show Password"
        onClick={onClick}
      />
      <label>Show Password</label>
    </div>
  );
}
