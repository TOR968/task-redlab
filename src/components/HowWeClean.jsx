import { useState, useRef } from 'react';
import { gsap } from 'gsap';

import kitchenBG from '../photo/kitchenBG.jpg';
import BG from '../photo/BG.jpg';
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

  const [cross21, setCross21] = useState(false);
  const [cross22, setCross22] = useState(false);
  const [cross23, setCross23] = useState(false);
  const [cross24, setCross24] = useState(false);
  const [cross25, setCross25] = useState(false);

  const [menuBtn, setMenuBtn] = useState({
    activeObjects: null,
    objects: [
      { id: 1, text: 'Кухня' },
      { id: 2, text: 'Комнаты' },
      { id: 3, text: 'Ванная' },
      { id: 4, text: 'Прихожая' },
    ],
  });

  function toggleActive(index) {
    setMenuBtn({ ...menuBtn, activeObjects: menuBtn.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (menuBtn.objects[index] === menuBtn.activeObjects) {
      return 'active';
    } else {
      return 'inactive';
    }
  }
  const ref = useRef(null);

  // перемиканя фото
  function animation(id) {
    // useEffect() => {
    const element = ref.current;

    if (id === 1) {
      gsap.from(element.querySelector('.kitchen-box'), {
        duration: 2,
        xPercent: 100,
        scale: 1.4,
        ease: ' power1. out out',
      });
      gsap.to(element.querySelector('.kitchen-box'), { zIndex: 9 });
    } else {
      gsap.to(element.querySelector('.kitchen-box'), { zIndex: 2 });
    }
    if (id === 3) {
      gsap.from(element.querySelector('.bathroom-box'), {
        duration: 2,
        xPercent: 100,
        scale: 1.4,
        ease: ' power1. out out',
      });
      gsap.to(element.querySelector('.bathroom-box'), { zIndex: 9 });
    } else {
      gsap.to(element.querySelector('.bathroom-box'), { zIndex: 1 });
    }
    // }, []);
  }

  return (
    <>
      <section className="how-clean container" ref={ref}>
        <div className="how-clean-text">
          <h2>Как мы убираем</h2>
          <p>
            Клинер приезжает в назначенное время со всем необходимым и сразу
            приступает к делу. Вам остаётся только оценить результат.
          </p>
        </div>

        <div className="kitchen-box box ">
          <img className="kitchen" src={kitchenBG} alt="kitchen" />

          <div
            className="circle-1 circle"
            style={
              !cross1
                ? {
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
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
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
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
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
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
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
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
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
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
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
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
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
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

        <div className="bathroom-box box">
          <img className="bathroom" src={BG} alt="bathroom" />
          <div
            className="circle2-1 circle"
            style={
              !cross21
                ? {
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross21(!cross21)}
          >
            <div className={cross21 ? 'circle-baner' : 'off'}>
              <span>Моем зеркала</span>
            </div>
            <div className="circle-plus">
              {!cross21 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
            </div>
          </div>
          <div
            className="circle2-2 circle"
            style={
              !cross22
                ? {
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross22(!cross22)}
          >
            <div className={cross22 ? 'circle-baner' : 'off'}>
              <span>Моем плитку</span>
            </div>
            <div className="circle-plus">
              {!cross22 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
            </div>
          </div>
          <div
            className="circle2-3 circle"
            style={
              !cross23
                ? {
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross23(!cross23)}
          >
            <div className={cross23 ? 'circle-baner' : 'off'}>
              <span>Моем ванну</span>
            </div>
            <div className="circle-plus">
              {!cross23 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
            </div>
          </div>
          <div
            className="circle2-4 circle"
            style={
              !cross24
                ? {
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross24(!cross24)}
          >
            <div className={cross24 ? 'circle-baner' : 'off'}>
              <span>Моем раковину</span>
            </div>
            <div className="circle-plus">
              {!cross24 ? (
                <img src={plus} alt="plus" />
              ) : (
                <img src={crossImg} alt="cross" />
              )}
            </div>
          </div>
          <div
            className="circle2-5 circle"
            style={
              !cross25
                ? {
                    backgroundColor: 'rgba(90, 48, 240, 0.2)',
                  }
                : {
                    backgroundColor: 'rgba(90, 48, 240, 0)',
                  }
            }
            onClick={() => setCross25(!cross25)}
          >
            <div className={cross25 ? 'circle-baner' : 'off'}>
              <span>Моем унитаз</span>
            </div>
            <div className="circle-plus">
              {!cross25 ? (
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
            <ul className="list-room" id="list-room">
              {menuBtn.objects.map((element, index) => (
                <li
                  key={element.id}
                  className={toggleActiveStyles(index)}
                  onClick={() => {
                    toggleActive(index);
                    animation(element.id);
                  }}
                >
                  {element.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
