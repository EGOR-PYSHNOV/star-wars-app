import React, { useState, useEffect, Children, cloneElement } from 'react';
import placeholderImage from '../assets/img/placeholder.png';
import Loader from './ui/Loader';
function ItemInfo({ type, imgSrc, children }) {
  const [loading, setLoading] = useState(false);
  const { item } = type;

  useEffect(() => {
    setLoading(true);
  }, [type]);

  return (
    <div className="star__info">
      {loading ? (
        item ? (
          <>
            <div className="star__img">
              <img
                src={`${imgSrc}${item && item.id}.jpg`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderImage;
                }}
                alt=""
              />
            </div>
            <div className="star__desc">
              <div className="star__desc-title">{item && item.name}</div>
              <ul className="star__desc-character">
                {Children.map(children, (child) => {
                  return cloneElement(child, { item });
                })}
              </ul>
            </div>
          </>
        ) : (
          <p className="star__choose">choose a planet</p>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ItemInfo;
