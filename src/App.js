//App.js
import { Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Locations from './components/Locations';

export default function App() {
  return (
      <>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path="/locations" element={<Locations />} />
            <Route path="/Mathis-Rentals" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Footer /> */}
      </div>
      </>
  );
}
