import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', margin: 0 }}>
        <li>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
