import React, { useEffect, useState } from "react";
import SubscribeSection from "../components/ui/SubscribeSection/SubscribeSection";
import InstagramSection from "../components/ui/InstagramSection/InstagramSection";
import VideoSection from "../components/ui/VideoSection/VideoSection";
import EcommerceTemplate from "../components/ui/EcommerceTemplate/EcommerceTemplate";
import Banner from '../assests/images/banner.jpg';
import WoodenImg from '../assests/images/wooden.png';
import StuffedImg from '../assests/images/stuffed.png'
import { Link } from "react-router-dom";

import './Home.css';

const Home = () => {
  const [stuffedAnimals, setStuffedAnimals] = useState([]);
  const [woodenToys, setWoodenToys] = useState([]);

  useEffect(() => {
    fetch("https://68395bb46561b8d882b012b7.mockapi.io/api/products")
      .then(res => res.json())
      .then(data => {
        setStuffedAnimals(data.filter(item => item.category_id === 1).slice(0, 4));
        setWoodenToys(data.filter(item => item.category_id === 2).slice(0, 4));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <div className="container-content">
        <div className="banner-container">
          <div
            className="banner-content"
            style={{ backgroundImage: `url(${Banner})` }}
          >
            <div className="banner-blog">
              <div className="banner-blog-content">
                <div className="banner-title">Say Hello to ToyStore!</div>
                <h1 className="banner-h1-title">
                  Free Ecommerce
                  <br />
                  Template for Webflow
                </h1>
                <Link to="/catalog" className="button w-button">
                  Open Catalog
                </Link>
              </div>
            </div>
            <a href="#toy-category-container" className="banner-case-mouse">
              <div className="banner-mouse-button">
                <div className="point-in-mouse"></div>
              </div>
            </a>
          </div>
        </div>

        <div id="toy-category-container" className="toy-category-container">
          <div className="toy-category-content">
            <div className="category-stuffed-animals">
              <img src={StuffedImg} alt="Stuffed Animals" />
              <div className="category-blog">
                <h3 className="category-title">Stuffed Animals</h3>
                <Link to="/catalog" className="category-shop-now-btn">
                  Shop now
                </Link>
              </div>
            </div>
            <div className="category-wooden-toys">
              <div className="category-blog">
                <h3 className="category-title">Wooden Toys</h3>
                <Link to="/catalog" className="category-shop-now-btn">
                  Shop now
                </Link>
              </div>
              <img src={WoodenImg} alt="Wooden Toys" />
            </div>
          </div>
        </div>

        <div className="product-section-container">
          <div className="product-section-content">
            <div className="stuffed-animal-toys">
              <div className="stuffed-animal-toys-header">
                <div className="stuffed-animal-toys-header-content">
                  <span className="section-title">Stuffed Animals</span>
                  <Link to="/catalog" className="see-all-toys">
                    <span className="see-all-toys-title">See All Toys</span>
                    <i className="fa-solid fa-right-long"></i>
                  </Link>
                </div>
                <div className="toys-line-header">
                  <div className="toys-line-header-color"></div>
                </div>
              </div>

              <div className="product-list">
                {stuffedAnimals.map(product => (
                  <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                    <div className="product-card">
                      <div className="product-card-content">
                        <img
                          src={product.image_link}
                          alt={product.product_name}
                          className="product-photo"
                        />
                        <h3 className="product-title">{product.product_name}</h3>
                        <span className="product-cost">${product.price}.00 USD</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="wood-crafted-toys">
              <div className="wood-crafted-toys-header">
                <div className="wood-crafted-toys-header-content">
                  <span className="section-title">Wooden Toys</span>
                  <Link to="/catalog" className="see-all-toys">
                    <span className="see-all-toys-title">See All Toys</span>
                    <i className="fa-solid fa-right-long"></i>
                  </Link>
                </div>
                <div className="toys-line-header">
                  <div className="toys-line-header-color"></div>
                </div>
              </div>

              <div className="product-list">
                {woodenToys.map(product => (
                  <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                    <div className="product-card">
                      <div className="product-card-content">
                        <img
                          src={product.image_link}
                          alt={product.product_name}
                          className="product-photo"
                        />
                        <h3 className="product-title">{product.product_name}</h3>
                        <span className="product-cost">${product.price}.00 USD</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <VideoSection />
        <EcommerceTemplate title="Available for FREE!" textBtn="Get It Now" />
        <SubscribeSection />
        <InstagramSection />
      </div>
    </div>
  );
};

export default Home;
