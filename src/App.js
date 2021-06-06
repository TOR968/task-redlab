import Navigation from './components/Navigation';
import OrderClean from './components/OrderClean';
import Аdvantages from './components/Аdvantages';
import HowWeClean from './components/HowWeClean';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="container">
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
