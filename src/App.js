import Navigation from './components/Navigation';
import OrderClean from './components/OrderClean';
import Аdvantages from './components/Аdvantages';
import HowWeClean from './components/HowWeClean';
import Example from './components/Example';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="container">
      <Navigation />
      <section>
        <OrderClean />
        <Аdvantages />
      </section>
      {/* <HowWeClean />
      <Example /> */}
    </div>
  );
}

export default App;
