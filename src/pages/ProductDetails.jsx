import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="container my-5 text-center">
      <div className="spinner-border" role="status"></div>
    </div>
  );

  if (error) return (
    <div className="container my-5">
      <div className="alert alert-danger">{error}</div>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="border p-3 bg-white" style={{ height: '400px' }}>
            <img 
              src={product.image} 
              alt={product.title} 
              className="img-fluid h-100 mx-auto d-block object-fit-contain"
            />
          </div>
        </div>
        <div className="col-md-6">
          <span className="badge bg-secondary mb-3">{product.category}</span>
          <h1>{product.title}</h1>
          <div className="d-flex align-items-center mb-3">
            <span className="h4 me-2">${product.price}</span>
            <span className="text-success">
              <i className="bi bi-star-fill"></i> {product.rating?.rate || '4.5'}
            </span>
          </div>
          <p className="lead">{product.description}</p>
          <div className="d-flex gap-3 mb-4">
            <button className="btn btn-primary btn-lg" onClick={() => addToCart(product)}>
              <i className="bi bi-cart-plus me-2"></i> Add to Cart
            </button>
            <button className="btn btn-outline-secondary btn-lg">
              <i className="bi bi-heart"></i>
            </button>
          </div>
          <div className="border-top pt-3">
            <p className="text-muted">
              <i className="bi bi-truck me-2"></i> Free shipping on orders over $50
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link to="/" className="btn btn-outline-primary">
          <i className="bi bi-arrow-left me-2"></i> Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;