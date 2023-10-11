import './aside.scss';
import Nav from './nav/Nav';
import LogoutButton from './logout-button/LogoutButton';

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside__top">
        <div className="aside__logo container">
          <img src="/images/header-logo.png" alt="logo" />
        </div>
        <Nav />
      </div>
      <LogoutButton />
    </aside>
  );
}
