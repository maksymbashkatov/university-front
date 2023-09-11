import './aside.scss';
import Nav from './nav/Nav';

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside__logo container">
        <img src="/images/header-logo.png" alt="logo" />
      </div>
      <Nav />
    </aside>
  );
}
