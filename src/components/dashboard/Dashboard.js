import './dashboard.scss';
import { useState } from 'react';
import Header from './header/Header';
import Aside from './aside/Aside';
import Content from './content/Content';

export default function Dashboard() {
  return (
    <div className="dashboard container">
      <Header h1="Lectors" />
      <main>
        <Aside />
        <Content />
      </main>
    </div>
  );
}
