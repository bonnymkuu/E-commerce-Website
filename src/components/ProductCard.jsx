import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-img-top p-3" style={{ height: '200px', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="img-fluid h-100 mx-auto d-block object-fit-contain"
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
            {product.title}
          </Link>
        </h5>
        <div className="mb-2">
          <span className="badge bg-primary">{product.category}</span>
        </div>
        <p className="card-text flex-grow-1">{product.description.substring(0, 60)}...</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="h5 mb-0">${product.price}</span>
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-primary">
            <i className="bi bi-cart-plus"></i> View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;