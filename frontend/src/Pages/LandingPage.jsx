import React from 'react';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ padding: '50px 20px', textAlign: 'center', background: '#7fcdc6', color: '#fff' }}>
        <h1>Welcome to [Company Name]</h1>
        <p>Your one-stop destination for innovative solutions.</p>
        <button style={{ padding: '10px 20px', background: '#fff', color: '#4CAF50', border: 'none', cursor: 'pointer' }}>
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section style={{ padding: '50px 20px', textAlign: 'center', background: '#f9f9f9' }}>
        <h2>Who We Are</h2>
        <p>
          At [Company Name], we specialize in delivering custom solutions to drive your business forward.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ padding: '50px 20px', textAlign: 'center', background: '#f5f5f5' }}>
        <h2>Our Features</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 30%', margin: '10px', textAlign: 'center' }}>
            <h3>Quality</h3>
            <p>We deliver top-notch services tailored to your needs.</p>
          </div>
          <div style={{ flex: '1 1 30%', margin: '10px', textAlign: 'center' }}>
            <h3>Innovation</h3>
            <p>We bring creative solutions to modern challenges.</p>
          </div>
          <div style={{ flex: '1 1 30%', margin: '10px', textAlign: 'center' }}>
            <h3>Support</h3>
            <p>24/7 support to ensure you succeed at every step.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '50px 20px', textAlign: 'center', background: '#4CAF50', color: '#fff' }}>
        <h2>Ready to Get Started?</h2>
        <button style={{ padding: '10px 20px', background: '#fff', color: '#4CAF50', border: 'none', cursor: 'pointer' }}>
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
