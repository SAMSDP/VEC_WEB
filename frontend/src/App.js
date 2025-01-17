import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavigationBar />
        <div style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
