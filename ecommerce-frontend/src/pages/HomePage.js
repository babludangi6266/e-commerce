
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex-grow">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Welcome to <span className="brand-name">ShopWithBablu</span>
              </h1>
              <p className="hero-subtitle">
                Discover amazing products at unbeatable prices. Quality meets affordability in every purchase.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary btn-large">
                  Start Shopping
                </Link>
                <Link to="/products" className="btn btn-outline">
                  View Deals
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card card-1">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" 
                  alt="Headphones" 
                  className="product-image"
                />
                <div className="card-badge">New</div>
              </div>
              <div className="floating-card card-2">
                <img 
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300" 
                  alt="Smartphone" 
                  className="product-image"
                />
                <div className="card-badge">Popular</div>
              </div>
              <div className="floating-card card-3">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" 
                  alt="Smart Watch" 
                  className="product-image"
                />
                <div className="card-badge">Sale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ShopWithBablu?</h2>
            <p className="section-subtitle">We're committed to providing the best shopping experience</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="feature-title">Wide Selection</h3>
              <p className="feature-description">
                Choose from hundreds of carefully curated products across multiple categories.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="feature-title">Secure Shopping</h3>
              <p className="feature-description">
                Your data is protected with industry-standard security measures and encryption.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="feature-title">Easy Checkout</h3>
              <p className="feature-description">
                Simple and fast checkout process with multiple secure payment options available.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="feature-title">Fast Delivery</h3>
              <p className="feature-description">
                Quick and reliable shipping with real-time tracking for all your orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Shopping?</h2>
            <p className="cta-subtitle">
              Join thousands of satisfied customers who trust ShopWithBablu for their shopping needs.
            </p>
            <Link to="/products" className="btn btn-primary btn-large">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;