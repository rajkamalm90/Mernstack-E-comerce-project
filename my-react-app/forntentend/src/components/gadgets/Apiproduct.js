import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TabTitle } from '../../utils/General';
import './ProductTable.css';
import axios from 'axios';

//this is use axios but your choise using fetch

const ProductCard = ({ product }) => {
  return (
   
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-stock">Stock: {product.countInStock}</div>
       </div>
       <div className="shop-now-link">
        {/*<a href={`/${product._id}`}>Shop Now</a>*/}
        <Link to={`/shop/${product._id}`}>Shop Now</Link>

      </div>
    </div>
  );
};

const ProductTable = () => {
  TabTitle("ShopwithRaj")
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div className="product-table-container">
      <h2>Product Table</h2>
      <div className="product-cards">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
