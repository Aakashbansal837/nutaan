import React from "react";
import Product from "../components/productDetails";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <Product />
      <Footer />
    </div>
  );
};

export default ProductDetails;
