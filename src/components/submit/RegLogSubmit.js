import './reg-log-submit.scss';

export default function RegLogSubmit(props) {
  return (
    <input
      className="reg-log-submit"
      type="submit"
      name="login"
      value={props.value}
    />
  );
}
