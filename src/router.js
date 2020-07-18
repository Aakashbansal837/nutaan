import React from "react";
import Index from "./pages/index";
import Wishlist from "./components/wishlist";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";

function Router(props) {
  return (
    <BrowserRouter>
      {/* ----Route Code---- */}
      <Route exact path="/" component={() => <Index {...props} />} />
      <Route exact path="/wishlist" component={() => <Wishlist {...props} />} />
      <Route
        exact
        path="/shopping-bag"
        component={() => <Wishlist {...props} />}
      />
      {/* ------------------ */}
    </BrowserRouter>
  );
}

export default withRouter(withSnackbar(Router));
