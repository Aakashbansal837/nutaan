import React from "react";

import { Button } from "@material-ui/core";
import WishlistCard from "./wishlistCard";

const Wishlist = (props) => {
  var [Imagelist, setImageList] = React.useState(props.data.InitialData);
  var [loading, setLoading] = React.useState(false);

  const RemoveItem = (data) => {
    var list = Imagelist.filter((item) => item !== data);
    setImageList(list);
  };
  const LoadMoreData = () => {
    setLoading(true);
    setTimeout(function () {
      setImageList(Imagelist.concat(props.data.DummyData));
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="wishlist">
      <div className="wishlist-center">
        <div className="container px-1">
          <div className="wishlist-center-heading">
            Wishlist &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="wishlist-center-heading-count">
              {Imagelist.length} Items
            </span>
          </div>
          <div className="row">
            {Imagelist.map((item) => {
              return (
                <div className="col-6 col-md-4 col-lg-3 wishlist-container">
                  <WishlistCard item={item} RemoveItem={RemoveItem} />
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-12">
              <center className="wishlist-loadmore">
                {loading ? (
                  <div>
                    <div class="spinner-border text-secondary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <Button
                    onClick={() => LoadMoreData()}
                    className="wishlist-loadmore-btn"
                    color="secondary"
                  >
                    Load More
                  </Button>
                )}
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
