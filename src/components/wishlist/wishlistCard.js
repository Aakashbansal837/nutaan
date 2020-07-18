import React from "react";
import { ReactComponent as Close } from "../../images/close.svg";

const WishlistCard = (props) => {
  return (
    <div className="wishlist-card">
      <div className="card">
        <Close
          onClick={() => props.RemoveItem(props.item)}
          className="wishlist-card-close"
        />
        <img
          className="wishlist-card-img"
          src={props.item.img}
          alt="wishlist card"
        />

        <div className="card-body wishlist-card-body">
          <p className="card-title wishlist-card-title">{props.item.name}</p>
          <p className="card-text wishlist-card-text">{props.item.disc}</p>
          <p className="card-text wishlist-card-title">{props.item.price}</p>
        </div>
        <utton className="btn btn-outlined wishlist-card-button">
          Add to Bag
        </utton>
      </div>
    </div>
  );
};

export default WishlistCard;
