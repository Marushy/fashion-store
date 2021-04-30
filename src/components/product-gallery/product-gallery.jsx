import React, { useState } from "react";

import "./product-gallery.styles.scss";

function ProductGallery({ className, images }) {
  const [thumbnails] = useState(images.gallery);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e) => {
    const activeIndex = e.target.getAttribute("data-index");
    setActiveIndex(activeIndex);
  };

  return (
    <div className={`${className}  gallery`}>
      <div className="gallery__image">
        <img
          src={`/${images.gallery[activeIndex]}`}
          alt="product"
          className="active"
        />
      </div>
      <ul className="gallery__list">
        {thumbnails.map((item, i) => (
          <li className="gallery__list-item" key={i}>
            <img
              src={`/${images.gallery[i]}`}
              alt="product"
              data-index={i}
              onClick={handleClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductGallery;
