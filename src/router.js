import React from "react";
import Index from "./pages/index";
import Wishlists from "./pages/wishlists";
import ShoppingBag from "./pages/shoppingBag";
import ComboBag from "./pages/comboBag";

import { Route, BrowserRouter, withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";

function Router(props) {
  return (
    <BrowserRouter>
      {/* ----Route Code---- */}
      <Route exact path="/" component={() => <Index {...props} />} />
      <Route
        exact
        path="/wishlist"
        component={() => <Wishlists {...props} />}
      />
      <Route
        exact
        path="/shopping-bag"
        component={() => <ShoppingBag {...props} />}
      />
      <Route
        exact
        path="/combo-bag"
        component={() => <ComboBag {...props} />}
      />
      {/* ------------------ */}
    </BrowserRouter>
  );
}

export default withRouter(withSnackbar(Router));
