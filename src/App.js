import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import OrderClean from './components/OrderClean';
import Аdvantages from './components/Аdvantages';
import HowWeClean from './components/HowWeClean';
import 'aos/dist/aos.css';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;

    // кнопка замовлення
    gsap.to(element.querySelector('.order-btn'), {
      duration: 1,
      y: 100,
      scale: 0.0,
      ease: 'none',
      delay: 1,
      scrollTrigger: {
        toggleActions: 'restart none reverse none',
        trigger: element.querySelector('.kitchen'),
        // markers: true,
        start: 'top center',
        end: '15px center',
      },
    });

    // тексттова частина
    gsap.to(element.querySelector('.how-clean-text'), {
      duration: 1,
      y: -120,
      ease: ' slow( 0.7 0.7, 0.7 0.7, false)',
      opacity: 0,
      scrollTrigger: {
        toggleActions: 'restart none reverse none',
        trigger: element.querySelector('.kitchen'),
        // markers: true,
        start: '50px center',
        end: '50px center',
      },
    });

    //бокове меню
    gsap.from(element.querySelector('.example'), {
      duration: 1,
      xPercent: -100,
      ease: ' slow( 0.7 0.7, 0.7 0.7, false)',
      scrollTrigger: {
        toggleActions: 'restart none reverse none',
        trigger: element.querySelector('.kitchen'),
        markers: true,
        start: '50px center',
        end: '50px center',
      },
    });
    //

    gsap.from(element.querySelector('.example'), {
      duration: 1,
      xPercent: -100,
      ease: ' slow( 0.7 0.7, 0.7 0.7, false)',
      scrollTrigger: {
        toggleActions: 'restart none reverse none',
        trigger: element.querySelector('.kitchen'),
        markers: true,
        start: '50px center',
        end: '50px center',
      },
    });
  }, []);
  return (
    <div className="container" ref={ref}>
      <Navigation />
      <section>
        <OrderClean />
        <Аdvantages />
      </section>
      <HowWeClean />
    </div>
  );
}

export default App;
