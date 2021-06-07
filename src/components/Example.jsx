import kitchenBG from '../photo/kitchenBG.jpg';
import BG from '../photo/BG.jpg';
export default function Example() {
  return (
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

      <ul className="photo-room">
        <li className="kitchenBG">
          <img src={kitchenBG} alt="kitchen" />
        </li>
        <li className="BG">
          <img src={BG} alt="bath" />
        </li>
      </ul>
    </section>
  );
}
