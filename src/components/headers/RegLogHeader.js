import './reg-log-header.scss';

export default function RegLogHeader(props) {
  return (
    <header>
      <img src="/images/logo.png" alt="logo" />
      <h1>{props.h1}</h1>
    </header>
  );
}
