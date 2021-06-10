import { useState } from 'react';

import kitchenBG from '../photo/kitchenBG.jpg';
// import BG from '../photo/BG.jpg';
import plus from '../photo/Plus.svg';
import crossImg from '../photo/Cross.svg';
export default function HowWeClean() {
  const [cross, setCross] = useState(false);
  return (
    <>
      <section className="how-clean">
        <div className="how-clean-text">
          <h2>Как мы убираем</h2>
          <p>
            Клинер приезжает в назначенное время со всем необходимым и сразу
            приступает к делу. Вам остаётся только оценить результат.
          </p>
        </div>
        <div className="kitchen-box">
          <img className="kitchen" src={kitchenBG} alt="kitchen" />
          <div className="circle" onClick={() => setCross(!cross)}>
            <div className="circle-1">
              <div className="circle-baner">
                <span>Чистим фасад вытяжки</span>
              </div>
              <div className="circle-plus">
                <img src={plus} alt="plus" />
              </div>
            </div>
          </div>
          <div className="circle-2 circle">
            <div className="circle-baner">
              <span>Моем фасады кухонных гарнитуров</span>
            </div>
            <div className="circle-plus">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div className="circle-3 circle">
            <div className="circle-baner">
              <span>Чистим плиту</span>
            </div>
            <div className="circle-plus">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div className="circle-4 circle">
            <div className="circle-baner">
              <span>Виносим мусор</span>
            </div>
            <div className="circle-plus">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div className="circle-5 circle">
            <div className="circle-baner">
              <span>Моем посуду</span>
            </div>
            <div className="circle-plus">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div className="circle-6 circle">
            <div className="circle-baner">
              <span>Протираем столешницу</span>
            </div>
            <div className="circle-plus">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div className="circle-7 circle">
            <div className="circle-baner">
              <span>Моем пол</span>
            </div>
            <div className="circle-plus">
              <img src={plus} alt="plus" />
            </div>
          </div>
        </div>
        <div className="example">
          <div className="menu">
            <h3>Как мы убираем</h3>
            <ul className="list-room">
              <li>Кухня</li>
              <li>Комнаты</li>
              <li>Ванная</li>
              <li>Прихожая</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
