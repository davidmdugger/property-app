import React from "react";
import alGore404 from "../../img/al-gore-404.jpg";

import "./NotFound.scss";

export default () => {
  return (
    <div className="not-found-wrapper">
      <img
        className="img"
        src={alGore404}
        alt="Al Gore, you broke the internent"
      />
    </div>
  );
};
