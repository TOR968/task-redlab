import kitchen from '../photo/kitchen.jpg';
export default function HowWeClean() {
  return (
    <section className="how-clean">
      <div className="how-clean-text">
        <h2>Как мы убираем</h2>
        <p>
          Клинер приезжает в назначенное время со всем необходимым и сразу
          приступает к делу. Вам остаётся только оценить результат.
        </p>
      </div>

      <img src={kitchen} alt="kitchen" />
    </section>
  );
}
