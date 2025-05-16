import React from "react";
import BreadcrumbNav from "../components/ui/BreadcrumbNav/BreadcrumbNav";
import SubscribeSection from "../components/ui/SubscribeSection/SubscribeSection";
import InstagramSection from "../components/ui/InstagramSection/InstagramSection";
import './Delivery.css';

function Delivery() {
    const pages = [
    { name: "Home", url: "/" },
    { name: "Delivery", url: "/delivery" },
  ];

  return (
    <div className="container">
      <div className="container-content">
        <BreadcrumbNav pages={pages} />
        <div className="delivery-container">
          <div className="delivery-content">
            <div className="delivery-infor-content">
              <div className="dilivery-infor">
                <p className="first-title title">Delivery Info</p>
                <p className="text">
                  A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer's mood when they see your ad.
                </p>
                <p className="title">What's a Rich Text element?</p>
                <p className="text">
                  The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
                </p>
                <p className="title">Static and dynamic content editing</p>
                <p className="text">
                  A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing.
                </p>
                <ul className="ul-li-text">
                  <li>Beautifully Designed</li>
                  <li>100% Responsive</li>
                  <li>CMS Content</li>
                  <li>Smooth Animations</li>
                </ul>
                <p className="text">
                  For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!
                </p>
                <p className="title">How to customize formatting for each rich text</p>
                <p className="text">
                  Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.
                </p>
              </div>
              <div className="call-to-contact-us">
                <div className="call-to-contact-us-content">
                  <div className="padding-contact-us-content">
                    <p className="question-text">
                      Can't Find the Answer <br /> to Your Question?
                    </p>
                    <a href="/pages/contact.html" className="btn-call-to-contact-us">
                      Contact Us
                    </a>
                  </div>
                </div>
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

export default Delivery;
