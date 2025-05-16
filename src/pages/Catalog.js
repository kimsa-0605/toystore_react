import React from "react";
import BreadcrumbNav from "../components/ui/BreadcrumbNav/BreadcrumbNav";
import SubscribeSection from "../components/ui/SubscribeSection/SubscribeSection";
import InstagramSection from "../components/ui/InstagramSection/InstagramSection";
import ProductCard from "../components/ui/ProductCard/ProductCard";
import './Catalog.css';

function Catalog() {
  const pages = [
    { name: "Home", url: "/" },
    { name: "Catalog", url: "/catalog" },
  ];

  const products = [
    {
      imgSrc: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png",
      altText: "Teddy Bear",
      title: "Teddy Bear",
      price: "$30.00 USD",
    },
    {
      imgSrc: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min-p-500.png",
      altText: "Happy Flower",
      title: "Happy Flower",
      price: "$38.00 USD",
    },
    {
      imgSrc: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png",
      altText: "Mega Plush Toy",
      title: "Mega Plush Toy",
      price: "$38.00 USD",
    },
    {
      imgSrc: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min-p-500.png",
      altText: "Lift Machine",
      title: "Lift Machine",
      price: "$24.00 USD",
    },
  ];

  return (
    <div className="container">
      <div className="container-content">
        <BreadcrumbNav pages={pages} />
        <div className="product-section-container">
          <div className="product-section-content">
            <div className="all-toys">
              <div className="all-toys-header">
                <div className="all-toys-header-content">
                  <span className="section-title">All Toys</span>
                  <span className="categories-toys">
                    <a href="#" className="categories-toys-all-toys">
                      All Toys
                    </a>
                    <a href="#" className="categories-toys-wooden-toys">
                      Wooden Toys
                    </a>
                    <a href="#" className="categories-toys-stuffed-toys">
                      Stuffed Toys
                    </a>
                  </span>
                </div>
                <div className="toys-line-header">
                  <div className="toys-line-header-color" />
                </div>
              </div>
              <div className="product-list">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    imgSrc={product.imgSrc}
                    altText={product.altText}
                    title={product.title}
                    price={product.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <SubscribeSection />
        <InstagramSection />
      </div>
    </div>
  );
}

export default Catalog;
