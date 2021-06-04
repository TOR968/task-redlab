import logo from '../photo/Logo.svg';
import menu from '../photo/menu.svg';
export default function Navigation() {
  return (
    <header className="nav ">
      <img src={logo} className="logo" alt="logo" />
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
      <div>
        {/* <a href="tel:+380674016977">+380 67 401 69 77</a> */}
        <span>+380 67 401 69 77</span>
        <span>24/7</span>
      </div>
      <img src={menu} className="menu" alt="menu" />
    </header>
  );
}
