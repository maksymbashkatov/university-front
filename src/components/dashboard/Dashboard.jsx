import './dashboard.scss';
import { useState } from 'react';
import Header from './header/Header';
import Aside from './aside/Aside';
import Content from './content/Content';

export default function Dashboard() {
  return (
    <div className="dashboard container">
      <Aside />
      <Header h1="Lectors" />
      <Content />
    </div>
  );
}
