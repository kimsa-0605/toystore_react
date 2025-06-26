import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SubscribeSection from '../components/ui/SubscribeSection/SubscribeSection';
import BreadcrumbNav from '../components/ui/BreadcrumbNav/BreadcrumbNav';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://68395bb46561b8d882b012b7.mockapi.io/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);

        fetch('https://68395bb46561b8d882b012b7.mockapi.io/api/products')
          .then(res => res.json())
          .then(allProducts => {
            const related = allProducts
              .filter(p => p.id !== id && p.category_id === data.category_id)
              .slice(0, 4);
            setRelatedProducts(related);
          });
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const pages = [
    { name: 'Home', url: '/' },
    { name: 'Catalog', url: '/catalog' },
    { name: product?.product_name || 'Product', url: `/product/detail/${product?.id}` }
  ];


  return (
    <div className="container-product-detail">
      <BreadcrumbNav pages={pages} />
      <div className="product-detail-content">
        <div className="card-product-detail">
          <div className="card-product-detail-content">
            <div className="product-info">
              <h2>{product.product_name}</h2>
              <p className="stock">Quantity: {product.quantity}</p>
              <p className="price">${product.price} USD</p>
              <div className="quantity-selector">
                <div className="quantity-group">
                  <button className="btn btn-decrease" id="decrease">-</button>
                  <input
                    type="text"
                    id="quantity-input"
                    className="form-control"
                    defaultValue="1"
                  />
                  <button className="btn btn-increase" id="increase">+</button>
                </div>
                <button className="add-to-cart">Add to cart</button>
              </div>
            </div>
            <div className="image-product">
              <img
                src={product.image_link}
                alt={product.product_name}
                className="product-img"
              />
            </div>
          </div>
          <div className="detail-content">
            <h3>Product description</h3>
            <div className="toys-line-header">
              <div className="toys-line-header-color"></div>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <div className="product-section-container">
        <div id='product-section-content' className="product-section-content">
          <div className="related-products">
            <div className="related-products-header">
              <div className="related-products-header-content">
                <span className="section-title">Related products</span>
                <Link to="/catalog" className="see-all-toys">
                  <span className="see-all-toys-title">See All Toys</span>
                  <i className="fa-solid fa-right-long"></i>
                </Link>
              </div>
              <div className="toys-line-header">
                <div className="toys-line-header-color"></div>
              </div>
            </div>
            <div className="product-list-detail">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((item) => (
                  <div className="product-card-detail" key={item.id}>
                    <Link to={`/product/${item.id}`} className="product-card-content">
                      <img
                        src={item.image_link}
                        alt={item.product_name}
                        className="product-photo"
                      />
                      <h3 className="product-title">{item.product_name}</h3>
                      <span className="product-cost">${item.price} USD</span>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No product found.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <SubscribeSection />
    </div>
  );
}

export default ProductDetail;
