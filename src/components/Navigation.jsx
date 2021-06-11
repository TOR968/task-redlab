import { useState } from 'react';

import logo from '../photo/Logo.svg';
import menu from '../photo/menu.svg';
export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className="nav container">
      <img src={logo} className="logo" alt="logo" />
      <nav className={menuActive ? 'nav-menu active' : 'nav-menu'}>
        <div className="togleClean">
          <p className="home">Дом</p>
          <p className="office">Офис</p>
        </div>
        <ul>
          <li>После ремонта</li>
          <li>Генеральная уборка</li>
          <li>Регулярная уборка</li>
          <li>Мойка окон</li>
        </ul>
        <div className="info">
          <span className="phone">+380 67 401 69 77</span>
          <span>24/7</span>
        </div>
      </nav>
      <div className="menu-btn" onClick={() => setMenuActive(!menuActive)}>
        <img src={menu} className="menu" alt="menu" />
      </div>
    </header>
  );
}
