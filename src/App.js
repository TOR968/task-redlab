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
        trigger: element.querySelector('.how-clean'),
        // markers: true,
        start: '70% 90%',
        end: '70% 90%',
      },
    });

    // текстова частина
    if (window.innerWidth > 768) {
      gsap.to(element.querySelector('.how-clean-text'), {
        duration: 1,
        y: -120,
        ease: ' slow( 0.7 0.7, 0.7 0.7, false)',
        opacity: 0,
        scrollTrigger: {
          toggleActions: 'restart none reverse none',
          trigger: element.querySelector('.how-clean'),
          // markers: true,
          start: '70% 90%',
          end: '70% 90%',
        },
      });
    }

    //бокове меню
    gsap.from(element.querySelector('.example'), {
      duration: 1,
      xPercent: -100,
      ease: ' slow( 0.7 0.7, 0.7 0.7, false)',
      scrollTrigger: {
        toggleActions: 'restart none reverse none',
        trigger: element.querySelector('.how-clean'),
        // markers: true,
        start: '70% 90%',
        end: '70% 90%',
      },
    });

    // рух фото

    if (window.innerWidth > 768) {
      gsap.to(element.querySelectorAll('.box'), {
        duration: 1,
        x: 150,
        y: -150,
        ease: ' power1. out out',
        scrollTrigger: {
          toggleActions: 'restart none reverse none',
          trigger: element.querySelector('.how-clean'),
          // markers: true,
          start: '70% 90%',
          end: '70% 90%',
        },
      });
    }

    // поява маркерів

    gsap.from(element.querySelectorAll('.circle'), {
      duration: 2,
      opacity: 0,
      delay: 0.5,
      ease: ' slow( 0.7 0.7, 0.7 0.7, false)',
      scrollTrigger: {
        toggleActions: 'restart none reverse none',
        trigger: element.querySelector('.how-clean'),
        // markers: true,
        start: '70% 90%',
        end: '70% 90%',
      },
    });
  }, []);
  return (
    <div ref={ref}>
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
