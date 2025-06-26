import React from "react";
import BreadcrumbNav from "../components/ui/BreadcrumbNav/BreadcrumbNav";
import EcommerceTemplate from "../components/ui/EcommerceTemplate/EcommerceTemplate";
import VideoSection from "../components/ui/VideoSection/VideoSection";
import SubscribeSection from "../components/ui/SubscribeSection/SubscribeSection";
import InstagramSection from "../components/ui/InstagramSection/InstagramSection";
import './About.css';
import { Link } from "react-router-dom";

function About() {
  const pages = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];

  return (
    <div className="container">
      <div className="container-content">
        <BreadcrumbNav pages={pages} />
        <div className="introducing-toy-container">
          <div className="introducing-toy-content">
            <div className="introducing-main-content">
              <div className="title-text">
                <p className="all-you-need-fun">All You Need is Fun!</p>
                <p className="introducing-toy-text">Introducing ToyStore</p>
                <p className="text">
                  A successful marketing plan relies heavily on the pulling-power
                  of advertising copy.
                  <br />
                  Writing result-oriented ad copy is difficult, as it must appeal to,
                  entice, and convince
                  <br />
                  consumers to take action.
                </p>
                <a className="about-link" href="#free-marketing-container">
                  More About Us
                </a>
              </div>
              <img
                src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-2000.jpeg"
                alt="About ToyStore"
              />
            </div>
          </div>
        </div>
        <EcommerceTemplate title="Simple & Colorful Ecommerce Template for Your Business" textBtn="Get it for Free"/>
        <div className="position-design-container">
          <div className="position-design-content">
            <div className="available-for-free">
              <img
                className="position-design-photo"
                src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77f0b5b7843138dc3c3_side-image-02-p-1080.jpeg"
                alt="Responsive Design"
                data-aos="zoom-in" data-aos-duration="1000"
              />
              <div className="available-for-free-content">
                <p className="available-for-free-title">100% Responsive</p>
                <div className="line-position-design"></div>
                <p className="position-design-text">
                  A successful marketing plan relies heavily on the pulling-power of
                  advertising copy. Writing result-oriented ad copy is difficult, as it
                  must appeal to, entice, and convince consumers to take action.
                  There is no magic formula to write perfect ad copy
                </p>
                <Link className="catelog-link" to="/catalog">
                  <span>Explore Our Toys</span>
                  <i className="fa-solid fa-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <VideoSection />
        <SubscribeSection />
        <InstagramSection />
      </div>
    </div>
  );
}

export default About;
