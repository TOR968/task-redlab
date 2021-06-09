import kitchen from '../photo/kitchen.jpg';
// import kitchenBG from '../photo/kitchenBG.jpg';
// import BG from '../photo/BG.jpg';
export default function HowWeClean() {
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

        <img className="kitchen" src={kitchen} alt="kitchen" />
      </section>
      <section className="example">
        <div className="menu">
          <h3>Как мы убираем</h3>
          <ul className="list-room">
            <li>Кухня</li>
            <li>Комнаты</li>
            <li>Ванная</li>
            <li>Прихожая</li>
          </ul>
        </div>

        {/* <ul className="photo-room">
          <li className="kitchenBG">
            <img src={kitchenBG} alt="kitchen" />
          </li>
          <li className="BG">
            <img src={BG} alt="bath" />
          </li>
        </ul> */}
      </section>
    </>
  );
}
