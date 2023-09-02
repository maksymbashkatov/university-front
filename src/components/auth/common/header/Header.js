import './header.scss';

export default function Header(props) {
  const { h1 } = props;

  return (
    <header>
      <img src="/images/logo.png" alt="logo" />
      <h1>{h1}</h1>
    </header>
  );
}
