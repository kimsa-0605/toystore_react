import React from 'react';
import './EcommerceTemplate.css';

const EcommerceTemplate = ({ title, textBtn }) => {
    return (
        <div id="free-marketing-container" class="free-marketing-container">
            <div id="free-marketing-container" className="free-marketing-content">
                <div className="made-for-webflow-content">
                    <div className="made-for-webflow-title">Made for Webflow</div>
                    <p className="free-marketing-title">
                        Simple & Colorful Ecommerce <br />Template for Your Business
                    </p>
                </div>
                <div className="available-for-free">
                    <div className="available-for-free-content">
                        <p className="available-for-free-title">{title}</p>
                        <div className="line-free-marketing"></div>
                        <p className="free-marketing-text">
                            A successful marketing plan relies heavily on the pulling-power of advertising copy.
                            Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince
                            consumers to take action. There is no magic formula to write perfect ad copy
                        </p>
                        <div className="button-available-for-free">{textBtn}</div>
                    </div>
                    <img
                        className="free-marketing-photo"
                        src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"
                        alt="Ecommerce Template"
                    />
                </div>
            </div>
        </div>
        
    );
};

export default EcommerceTemplate;
