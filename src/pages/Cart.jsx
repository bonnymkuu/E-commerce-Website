import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, cartCount } = useCart();
//   // In a real app, you would get this from your state management
//   const cartItems = [
//     { 
//       id: 1, 
//       title: 'Fjallraven Backpack', 
//       price: 109.95, 
//       quantity: 1, 
//       image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' 
//     },
//     { 
//       id: 2, 
//       title: 'Mens Casual T-Shirt', 
//       price: 22.3, 
//       quantity: 2, 
//       image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' 
//     }
//   ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Your Shopping Cart ({cartCount} items)</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <i className="bi bi-cart-x"></i>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet</p>
            <Link to="/products" className="shop-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p>ksh{item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button className="quantity-btn">
                        <i className="bi bi-dash"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button className="quantity-btn">
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="item-total">
                    <p>ksh{(item.price * item.quantity).toFixed(2)}</p>
                    <button className="remove-btn">
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>ksh{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>ksh{shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>ksh{total.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
              <Link to="/products" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .cart-page {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        
        .cart-container h1 {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 2rem;
        }
        
        .empty-cart {
          text-align: center;
          padding: 3rem 0;
        }
        
        .empty-cart i {
          font-size: 4rem;
          color: #e74c3c;
          margin-bottom: 1rem;
        }
        
        .empty-cart h2 {
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }
        
        .shop-btn {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.8rem 1.5rem;
          background: #e74c3c;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background 0.3s ease;
        }
        
        .shop-btn:hover {
          background: #c0392b;
        }
        
        .cart-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }
        
        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .cart-item {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .item-image {
          width: 100px;
          height: 100px;
        }
        
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        .item-details {
          flex-grow: 1;
        }
        
        .item-details h3 {
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }
        
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .quantity-btn {
          background: #f8f9fa;
          border: 1px solid #ddd;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .item-total {
          text-align: right;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .item-total p {
          font-weight: bold;
          color: #2c3e50;
        }
        
        .remove-btn {
          background: none;
          border: none;
          color: #e74c3c;
          cursor: pointer;
          font-size: 1.2rem;
        }
        
        .cart-summary {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          align-self: flex-start;
          position: sticky;
          top: 1rem;
        }
        
        .cart-summary h3 {
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eee;
        }
        
        .summary-row.total {
          font-weight: bold;
          font-size: 1.1rem;
          border-bottom: none;
          margin-top: 1.5rem;
        }
        
        .checkout-btn {
          width: 100%;
          padding: 1rem;
          background: #e74c3c;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          margin-top: 1.5rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .checkout-btn:hover {
          background: #c0392b;
        }
        
        .continue-shopping {
          display: block;
          text-align: center;
          margin-top: 1rem;
          color: #e74c3c;
          text-decoration: none;
        }
        
        @media (max-width: 768px) {
          .cart-content {
            grid-template-columns: 1fr;
          }
          
          .cart-item {
            flex-direction: column;
          }
          
          .item-total {
            flex-direction: row;
            align-items: center;
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;