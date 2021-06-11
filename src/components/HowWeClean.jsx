import { useState } from 'react';

import kitchenBG from '../photo/kitchenBG.jpg';
// import BG from '../photo/BG.jpg';
import plus from '../photo/Plus.svg';
import crossImg from '../photo/Cross.svg';
export default function HowWeClean() {
  const [cross1, setCross1] = useState(false);
  const [cross2, setCross2] = useState(false);
  const [cross3, setCross3] = useState(false);
  const [cross4, setCross4] = useState(false);
  const [cross5, setCross5] = useState(false);
  const [cross6, setCross6] = useState(false);
  const [cross7, setCross7] = useState(false);

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

          <div
            className="circle-1 circle"
            style={
              !cross1
                ? {
                    'background-color': 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    'background-color': 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross1(!cross1)}
          >
            <div className={cross1 ? 'circle-baner' : 'off'}>
              <span>Чистим фасад вытяжки</span>
            </div>
            <div className="circle-plus">
              {!cross1 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
            </div>
          </div>
          <div
            className="circle-2 circle"
            style={
              !cross2
                ? {
                    'background-color': 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    'background-color': 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross2(!cross2)}
          >
            <div className={cross2 ? 'circle-baner' : 'off'}>
              <span>Моем фасады кухонных гарнитуров</span>
            </div>
            <div className="circle-plus">
              {!cross2 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
            </div>
          </div>
          <div
            className="circle-3 circle"
            style={
              !cross3
                ? {
                    'background-color': 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    'background-color': 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross3(!cross3)}
          >
            <div className={cross3 ? 'circle-baner' : 'off'}>
              <span>Чистим плиту</span>
            </div>
            <div className="circle-plus">
              {!cross3 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
            </div>
          </div>
          <div
            className="circle-4 circle"
            style={
              !cross4
                ? {
                    'background-color': 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    'background-color': 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross4(!cross4)}
          >
            <div className={cross4 ? 'circle-baner' : 'off'}>
              <span>Виносим мусор</span>
            </div>
            <div className="circle-plus">
              {!cross4 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
            </div>
          </div>
          <div
            className="circle-5 circle"
            style={
              !cross5
                ? {
                    'background-color': 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    'background-color': 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross5(!cross5)}
          >
            <div className={cross5 ? 'circle-baner' : 'off'}>
              <span>Моем посуду</span>
            </div>
            <div className="circle-plus">
              {!cross5 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
            </div>
          </div>
          <div
            className="circle-6 circle"
            style={
              !cross6
                ? {
                    'background-color': 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    'background-color': 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross6(!cross6)}
          >
            <div className={cross6 ? 'circle-baner' : 'off'}>
              <span>Протираем столешницу</span>
            </div>
            <div className="circle-plus">
              {!cross6 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
            </div>
          </div>
          <div
            className="circle-7 circle"
            style={
              !cross7
                ? {
                    'background-color': 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    'background-color': 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross7(!cross7)}
          >
            <div className={cross7 ? 'circle-baner' : 'off'}>
              <span>Моем пол</span>
            </div>
            <div className="circle-plus">
              {!cross7 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
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
