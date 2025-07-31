import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container px-4">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-md-6 col-lg-3">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-danger rounded me-2 d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                <span className="text-white fw-bold">B</span>
              </div>
              <h3 className="h5 mb-0 text-white">Bonny Shop</h3>
            </div>
            <p className="text-light">
              Kenya's premier online marketplace for quality products at affordable prices.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light btn-sm p-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm p-2">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm p-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm p-2">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-6 col-lg-3">
            <h4 className="h5 mb-3 text-white">Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="text-decoration-none text-light">About Us</Link></li>
              <li className="mb-2"><Link to="/products" className="text-decoration-none text-light">All Products</Link></li>
              <li className="mb-2"><Link to="/categories" className="text-decoration-none text-light">Categories</Link></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-light">Deals & Offers</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div className="col-md-6 col-lg-3">
            <h4 className="h5 mb-3 text-white">Customer Service</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/contact" className="text-decoration-none text-light">Contact Us</Link></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-light">Delivery Information</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-light">Returns Policy</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-light">FAQs</a></li>
            </ul>
          </div>
          
          {/* Contact Info - Kenya Specific */}
          <div className="col-md-6 col-lg-3">
            <h4 className="h5 mb-3 text-white">Our Locations</h4>
            <ul className="list-unstyled text-light">
              <li className="mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-envelope"></i>
                <span>info@bonnyshop.co.ke</span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-telephone"></i>
                <span>+254 700 123456</span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt"></i>
                <span>Moi Avenue, Nairobi</span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-clock"></i>
                <span>Mon-Fri: 8AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-top border-secondary mt-4 pt-4 pb-3 text-center">
          <p className="mb-1 text-light">
            &copy; {new Date().getFullYear()} Bonny Shop Kenya. All rights reserved.
          </p>
          <p className="mb-0 text-muted small">
            Proudly Kenyan | M-PESA Accepted Nationwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;