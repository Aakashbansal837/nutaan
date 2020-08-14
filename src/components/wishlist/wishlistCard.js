import React from "react";
import { ReactComponent as Close } from "../../images/close.svg";

const WishlistCard = ({ item, RemoveItem }) => {
  return (
    <div className="wishlist-card">
      <div className="card">
        <Close
          onClick={() => RemoveItem(item)}
          className="wishlist-card-close"
        />
        <img className="wishlist-card-img" src={item.img} alt="wishlist card" />

        <div className="card-body wishlist-card-body">
          <p className="card-title wishlist-card-title">{item.name}</p>
          <p className="card-text wishlist-card-text">{item.disc}</p>
          <p className="card-text wishlist-card-title">{item.price}</p>
        </div>
        <utton className="btn btn-outlined wishlist-card-button">
          Add to Bag
        </utton>
      </div>
    </div>
  );
};

export default WishlistCard;
