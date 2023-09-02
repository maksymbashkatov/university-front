import './submit.scss';

export default function Submit(props) {
  const { value } = props;

  return (
    <input
      className="reg-log-submit"
      type="submit"
      name="login"
      value={value}
    />
  );
}
