import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import OrderClean from './components/OrderClean';
import Аdvantages from './components/Аdvantages';
import HowWeClean from './components/HowWeClean';
import Example from './components/Example';
import 'aos/dist/aos.css';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.to(element.querySelector('.order-btn'), {
      duration: 1,
      y: 100,
      scale: 0.0,
      ease: 'none',
      delay: 1,
      scrollTrigger: {
        toggleActions: 'restart none reverse none',
        trigger: element.querySelector('.kitchen'),
        markers: true,
        start: 'top 20px',
        end: 'bottom 20px',
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
      {/* <Example /> */}
    </div>
  );
}

export default App;
