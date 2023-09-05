import './header.scss';

export default function Header(props) {
  const { h1 } = props;

  return (
    <header className="header">
      <div className="header__logo container">
        <img src="/images/header-logo.png" alt="logo" />
      </div>
      <h1>{h1}</h1>
    </header>
  );
}
