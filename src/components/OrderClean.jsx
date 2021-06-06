import title from '../photo/title-bg.jpg';
export default function OrderClean() {
  return (
    <section className="order">
      <img src={title} alt="clean up" />
      <div className="title-text">
        <h1>Уборка квартир в Киеве </h1>
        <p>
          Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и
          проведем генеральную уборку.{' '}
        </p>
      </div>
      <div className="order-btn">
        <span>
          Заказать <br /> уборку
        </span>
      </div>
    </section>
  );
}
