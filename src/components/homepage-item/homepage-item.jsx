import React from "react";
import { withRouter } from "react-router-dom";

import "./homepage-item.styles.scss";

function HomepageItem({
  title,
  saleText,
  className,
  urlStartItem,
  linkUrl,
  match,
  history,
}) {
  return (
    <div
      className={className}
      //onClick={() => history.push(`${match.url}${linkUrl}`)}
      onClick={() => history.push(`/${linkUrl}`)}
    >
      <div className="homeitem">
        <img src={urlStartItem} alt={`${title} `} className="homeitem__img" />
        <p className="homeitem__text">
          <span className="homeitem__text-span">{saleText}</span>
          {title}
        </p>
      </div>
    </div>
  );
}

export default withRouter(HomepageItem);
