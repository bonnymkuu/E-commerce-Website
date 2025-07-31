const About = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Discover the passion behind Bonny Shop</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Bonny Shop started as a small boutique in 2015 with a simple mission: to bring 
            beautifully crafted products to customers who appreciate quality and design. 
            What began as a single store has now grown into a thriving online marketplace 
            serving customers worldwide.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3>8+</h3>
              <p>Years in Business</p>
            </div>
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Quality Products</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
          
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="bi bi-stars"></i>
              <h3>Quality</h3>
              <p>We carefully curate only the finest products for our customers.</p>
            </div>
            <div className="value-card">
              <i className="bi bi-heart"></i>
              <h3>Passion</h3>
              <p>We love what we do and it shows in every interaction.</p>
            </div>
            <div className="value-card">
              <i className="bi bi-shield-check"></i>
              <h3>Integrity</h3>
              <p>Honest business practices and transparent policies.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          color: #2c3e50;
        }
        
        .hero-section {
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8');
          background-size: cover;
          background-position: center;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }
        
        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .hero-content p {
          font-size: 1.5rem;
          opacity: 0.9;
        }
        
        .about-content {
          padding: 4rem 0;
        }
        
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        h2 {
          font-size: 2rem;
          margin: 2rem 0 1.5rem;
          color: #e74c3c;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }
        
        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .stat-item h3 {
          font-size: 2.5rem;
          color: #e74c3c;
          margin-bottom: 0.5rem;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .value-card {
          text-align: center;
          padding: 2rem;
          border: 1px solid #eee;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }
        
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .value-card i {
          font-size: 2.5rem;
          color: #e74c3c;
          margin-bottom: 1rem;
        }
        
        .value-card h3 {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default About;