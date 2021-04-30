import React from "react";
import { Route } from "react-router-dom";
import CategoryPage from "../category/category-page";

export default function ShopPage({ match }) {
  return (
    <div>
      <Route path="/shop" component={CategoryPage} />
    </div>
  );
}
