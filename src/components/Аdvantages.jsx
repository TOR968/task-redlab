import girl1 from '../photo/girl1.png';
import detergent from '../photo/detergent.png';
import girl2 from '../photo/girl2.png';
import phone from '../photo/phone.png';

import Aos from 'aos';

import { useEffect } from 'react';

export default function Аdvantages() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <ul className="advantages container">
      <li data-aos="fade-up" data-aos-delay="50">
        <h3>Тщательно отобранный персонал</h3>
        <p className="card-text">
          Не нужно тратить время, силы и ресурсы на разме- щение вакансий,
          проведе- ние собеседований, про- верку кандидатов на должность
          уборщицы. За счет больших объемов мы можем сделать это эффективнее.
        </p>
        <img src={girl1} alt="girl1" />
      </li>
      <li data-aos="fade-up" data-aos-delay="150">
        <h3>
          Качественная <br /> эко-химия
        </h3>
        <p className="card-text">
          Не нужно тратить время, силы и ресурсы на разме- щение вакансий,
          проведе- ние собеседований, про- верку кандидатов на должность
          уборщицы. За счет больших объемов мы можем сделать это эффективнее.
        </p>
        <img src={detergent} alt="detergent" />
      </li>
      <li data-aos="fade-up" data-aos-delay="250">
        <h3>Контролируем качество</h3>
        <p className="card-text">
          Не нужно тратить время, силы и ресурсы на разме- щение вакансий,
          проведе- ние собеседований, про- верку кандидатов на должность
          уборщицы. За счет больших объемов мы можем сделать это эффективнее.
        </p>
        <img src={girl2} alt="girl2" />
      </li>
      <li data-aos="fade-up" data-aos-delay="350">
        <h3>Работаем круглосуточно</h3>
        <p className="card-text">
          Не нужно тратить время, силы и ресурсы на разме- щение вакансий,
          проведе- ние собеседований, про- верку кандидатов на должность
          уборщицы. За счет больших объемов мы можем сделать это эффективнее.
        </p>
        <img src={phone} alt="phone" />
      </li>
    </ul>
  );
}
