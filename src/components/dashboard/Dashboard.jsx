import './dashboard.scss';
import Aside from './aside/Aside';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="dashboard container">
      <Aside />
      <Outlet />
    </div>
  );
}
