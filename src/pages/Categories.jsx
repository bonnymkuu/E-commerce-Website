import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Electronics', icon: 'bi-phone', count: 42 },
    { id: 2, name: 'Clothing', icon: 'bi-tshirt', count: 36 },
    { id: 3, name: 'Home & Garden', icon: 'bi-house', count: 28 },
    { id: 4, name: 'Beauty', icon: 'bi-basket', count: 19 },
    { id: 5, name: 'Sports', icon: 'bi-bicycle', count: 25 },
    { id: 6, name: 'Books', icon: 'bi-book', count: 31 },
  ];

  return (
    <div className="page-container">
      <div className="categories-header">
        <h1>Shop by Category</h1>
        <p>Browse our wide selection of products</p>
      </div>
      
      <div className="categories-grid">
        {categories.map(category => (
          <Link 
            to={`/products?category=${category.name.toLowerCase()}`} 
            key={category.id}
            className="category-card"
          >
            <div className="category-icon">
              <i className={`bi ${category.icon}`}></i>
            </div>
            <h3>{category.name}</h3>
            <span className="product-count">{category.count} products</span>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .page-container {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        
        .categories-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .categories-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .category-card {
          background: white;
          border-radius: 8px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          text-decoration: none;
          color: #2c3e50;
        }
        
        .category-card:hover {
          transform: translateY(-5px);
        }
        
        .category-icon {
          font-size: 2.5rem;
          color: #e74c3c;
          margin-bottom: 1rem;
        }
        
        .category-card h3 {
          margin-bottom: 0.5rem;
        }
        
        .product-count {
          color: #7f8c8d;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Categories;