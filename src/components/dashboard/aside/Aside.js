import './aside.scss';
import Nav from './nav/Nav';
import Button from './button/Button';

export default function Aside() {
  return (
    <aside className="aside container">
      <Nav />
      <Button />
    </aside>
  );
}
