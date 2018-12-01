import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./PropertyItem.scss";

export default ({ id, name, img, deleteProperty }) => {
  return (
    <Fragment>
      <div className="property" key={id}>
        <div className="img-wrapper">
          <img src={img} alt={name} />
          <div className="show">
            <span>
              <Link style={{ color: "#fff" }} to={`/properties/${id}`}>
                View Property
              </Link>
            </span>
          </div>
        </div>
        <h3 className="name">{name}</h3>
        <div className="content">
          <div className="data">
            <p>Neighborhood</p>
            <p># of rooms</p>
          </div>
          <div className="data">
            <p>square ft</p>
            <p>$125,000</p>
          </div>
        </div>
      </div>
      <button onClick={() => deleteProperty(id)}>DELETE</button>
    </Fragment>
  );
};
