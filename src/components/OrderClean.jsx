import title from '../photo/title-bg.jpg';
export default function OrderClean() {
  return (
    <div className="order">
      <img className="backgraund-img" src={title} alt="clean up" />
      <div className="title-text">
        <h1>Уборка квартир в Киеве </h1>
        <p>
          Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и
          проведем генеральную уборку.{' '}
        </p>
      </div>
      <div className="order-btn">
        <span className="order-text">
          Заказать <br /> уборку
        </span>
      </div>
    </div>
  );
}
