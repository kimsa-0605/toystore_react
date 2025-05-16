import React from "react";
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
  return (
    <div className="container">
      <div className="container-content">
        {/* Banner */}
        <div className="banner-container">
          <div className="banner-content" style={{ backgroundImage: `url(${Banner})` }}>
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
        {/* End banner */}

        {/* Call to action */}
        <div id="toy-category-container" className="toy-category-container">
          <div className="toy-category-content">
            <div className="category-stuffed-animals">
              <img src={StuffedImg} alt="Stuffed Animals" />
              <div className="category-blog">
                <h3 className="category-title">Stuffed Animals</h3>
                <Link to='/catalog' className="category-shop-now-btn">
                  Shop now
                </Link>
              </div>
            </div>
            <div className="category-wooden-toys">
              <div className="category-blog">
                <h3 className="category-title">Wooden Toys</h3>
                <Link to='/catalog' className="category-shop-now-btn">
                  Shop now
                </Link>
              </div>
              <img src={WoodenImg} alt="Wooden Toys" />
            </div>
          </div>
        </div>
        {/* End call to action */}

        {/* Product section */}
        <div className="product-section-container">
          <div className="product-section-content">
            {/* Stuffed Animals */}
            <div className="stuffed-animal-toys">
              <div className="stuffed-animal-toys-header">
                <div className="stuffed-animal-toys-header-content">
                  <span className="section-title">Stuffed Animals</span>
                  <Link to='/catalog' className="see-all-toys">
                    <span className="see-all-toys-title">See All Toys</span>
                    <i className="fa-solid fa-right-long"></i>
                  </Link>
                </div>
                <div className="toys-line-header">
                  <div className="toys-line-header-color"></div>
                </div>
              </div>

              <div className="product-list">
                {/* Product cards */}
                <div className="product-card">
                  <div className="product-card-content">
                    <img
                      src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png"
                      alt="Teddy Bear"
                      className="product-photo"
                    />
                    <h3 className="product-title">Teddy Bear</h3>
                    <span className="product-cost">$30.00 USD</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card-content">
                    <img
                      src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png"
                      alt="Mega Plush Toy"
                      className="product-photo"
                    />
                    <h3 className="product-title">Mega Plush Toy</h3>
                    <span className="product-cost">$38.00 USD</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card-content">
                    <img
                      src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png"
                      alt="Cute Dog"
                      className="product-photo"
                    />
                    <h3 className="product-title">Cute Dog</h3>
                    <span className="product-cost">$24.00 USD</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card-content">
                    <img
                      src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min-p-500.png"
                      alt="Little Friend"
                      className="product-photo"
                    />
                    <h3 className="product-title">Little Friend</h3>
                    <span className="product-cost">$27.00 USD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wooden Toys */}
            <div className="wood-crafted-toys">
              <div className="wood-crafted-toys-header">
                <div className="wood-crafted-toys-header-content">
                  <span className="section-title">Wooden Toys</span>
                  <Link to='/catalog' className="see-all-toys">
                    <span className="see-all-toys-title">See All Toys</span>
                    <i className="fa-solid fa-right-long"></i>
                  </Link>
                </div>
                <div className="toys-line-header">
                  <div className="toys-line-header-color"></div>
                </div>
              </div>

              <div className="product-list">
                {/* Product cards */}
                <div className="product-card">
                  <div className="product-card-content">
                    <img
                      src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png"
                      alt="Happy Flower"
                      className="product-photo"
                    />
                    <h3 className="product-title">Happy Flower</h3>
                    <span className="product-cost">$38.00 USD</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card-content">
                    <img
                      src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png"
                      alt="Lift Machine"
                      className="product-photo"
                    />
                    <h3 className="product-title">Lift Machine</h3>
                    <span className="product-cost">$24.00 USD</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card-content">
                    <img
                      src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png"
                      alt="Wooden Camera"
                      className="product-photo"
                    />
                    <h3 className="product-title">Wooden Camera</h3>
                    <span className="product-cost">$32.00 USD</span>
                  </div>
                </div>

                <div className="product-card">
                  <div className="product-card-content">
                    <img
                      src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png"
                      alt="Little Rabbit"
                      className="product-photo"
                    />
                    <h3 className="product-title">Little Rabbit</h3>
                    <span className="product-cost">$16.00 USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End product section */}
        <VideoSection/>
        <EcommerceTemplate title="Available for FREE!" textBtn="Get It Now" />
        <SubscribeSection/>
        <InstagramSection/>
      </div>
    </div>
  );
};

export default Home;
