import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bonny-header">
      <div className="header-container">
        {/* Logo/Brand */}
        <div className="brand-container">
          <Link to="/" className="brand-link">
            <i className="bi bi-flower1"></i>
            <span className="brand-name">Bonny Shop</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <nav className={`main-nav ${menuOpen ? 'show' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/categories" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/products" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                All Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item cart-item">
              <NavLink 
                to="/cart" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                <i className="bi bi-cart3"></i>
                Cart <span className="badge bg-danger ms-1">{cartCount}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Add this CSS in your stylesheet */}
      <style jsx>{`
        .bonny-header {
          background-color: #2c3e50;
          color: white;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .brand-container {
          display: flex;
          align-items: center;
        }
        
        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        .brand-link i {
          margin-right: 0.5rem;
          font-size: 1.8rem;
          color: #e74c3c;
        }
        
        .menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          padding: 0;
        }
        
        .menu-toggle .bar {
          height: 3px;
          width: 100%;
          background-color: white;
          transition: all 0.3s ease;
        }
        
        .menu-toggle.open .bar:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        
        .menu-toggle.open .bar:nth-child(2) {
          opacity: 0;
        }
        
        .menu-toggle.open .bar:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
        
        .main-nav {
          display: flex;
        }
        
        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        .nav-item {
          margin-left: 1.5rem;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #e74c3c;
        }
        
        .nav-link.active {
          color: #e74c3c;
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #e74c3c;
        }
        
        .cart-item {
          position: relative;
        }
        
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: #e74c3c;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.7rem;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }
          
          .main-nav {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #2c3e50;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            transition: clip-path 0.4s ease;
          }
          
          .main-nav.show {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          
          .nav-list {
            flex-direction: column;
            width: 100%;
          }
          
          .nav-item {
            margin: 0.5rem 0;
            width: 100%;
            text-align: center;
          }
          
          .nav-link {
            padding: 0.5rem 1rem;
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;