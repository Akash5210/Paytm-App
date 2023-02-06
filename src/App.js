import './App.css';
import Navbar from './Components/Navbar';
import MostLoved1 from './Components/MostLoved1';
import PaymentInstruments from './Components/PaymentInstruments';
import FinantialServices from './Components/FinantialServices';
import BusinessServices from './Components/BusinessServices';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MostLoved1 />
      <PaymentInstruments />
      <FinantialServices/>
      <BusinessServices />
      <Footer />
    </div>
  );
}

export default App;
