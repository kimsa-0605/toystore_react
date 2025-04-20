import './App.css';
import Header from './layouts/Header';
import Home from './pages/Home';
import Delivery from './pages/Delivery';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contacts from './pages/Contacts';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
  </Router>
  );
}

export default App;
