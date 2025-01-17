import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavigationBar />
        <div style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
