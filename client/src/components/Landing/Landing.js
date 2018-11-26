import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// components

import "./Landing.scss";

export default () => {
  return (
    <div className="landing-wrapper">
      <div className="inner">
        <div className="logo-wrapper">
          <FontAwesomeIcon className="logo" icon={faHome} />
          <span>Rentr</span>
        </div>
        <div className="cta">
          <h5 className="subtitle">YOUR NEXT RENTAL PROPERTY</h5>
          <h2 className="title">Managing your rental property search</h2>
          <button className="cta-button">VIEW YOUR PROPERTIES</button>
        </div>
      </div>
      <div className="recent-listings">
        <span className="listing" />
        <span className="listing" />
        <span className="listing" />
      </div>
    </div>
  );
};
