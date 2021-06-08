import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import title from '../photo/title-bg.jpg';
export default function OrderClean() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.to(element.querySelector('.order-btn'), {
      duration: 3,
      // y: element.querySelector('.example'),
      scale: 0.8,
      ease: 'none',
      restart: true,
      delay: 1,
      scrollTrigger: {
        trigger: element.querySelector('.order-btn'),
        // markers: true,
        start: 'top center',
        // end: element.querySelector('.example'), // end after scrolling 500px beyond the start
      },
    });
  }, []);
  return (
    <div className="order" ref={ref}>
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
