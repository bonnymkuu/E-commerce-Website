import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=6');
        const data = await response.json();
        setFeaturedProducts(data);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Typing Effect */}
      <section className="hero-section py-5 bg-light">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">
            <TypeAnimation
              sequence={[
                'Discover Amazing Products',
                1000,
                'Discover Quality Products',
                1000,
                'Discover Stylish Products',
                1000,
                'Discover Innovative Products',
                1000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </h1>
          
          <p className="lead mb-4">
            <TypeAnimation
              sequence={[
                'Explore our curated collection of premium products',
                1500,
                'Designed to elevate your lifestyle',
                1500,
                'Quality, style, and innovation in every item',
                1500,
                'Your perfect shopping experience starts here',
                1500
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block', minHeight: '1.5em' }}
            />
          </p>
          
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/products" className="btn btn-primary btn-lg px-4">
              Shop Now
            </Link>
            <Link to="/categories" className="btn btn-outline-dark btn-lg px-4">
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of your home page content (featured products, etc.) */}
      <section className="featured-products py-5">
        <div className="container">
          <div className="section-header mb-5 text-center">
            <h2 className="h1 mb-3">Featured Collection</h2>
            <p className="text-muted">Handpicked selections just for you</p>
          </div>
          
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {featuredProducts.map(product => (
                <div key={product.id} className="col">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.7)), 
                      url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          margin-bottom: 3rem;
          min-height: 60vh;
          display: flex;
          align-items: center;
        }
        
        .featured-products {
          background-color: #f8f9fa;
        }
        
        /* Customize typing cursor color */
        .react-type-animation-cursor {
          color: #e74c3c; /* Matches your brand color */
        }
      `}</style>
    </div>
  );
};

export default Home;