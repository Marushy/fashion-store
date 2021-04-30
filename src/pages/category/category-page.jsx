import React, { useContext } from "react";
import MenuItem from "../../components/menu-item/menu-item";
import Layout from "../../shered/layout/layout";
import { ProductsContext } from "../../context/shop.context";

import "./category-styles.scss";

const CategoryPage = ({ match }) => {
  const { products } = useContext(ProductsContext);
  const collection = match.params.category;

  let categoryProducts = [];

  if (!products) return <div class="loading">....Loading</div>;

  if (collection.includes("sale")) {
    categoryProducts = products
      .filter(
        (product) =>
          product.sale === true && collection.includes(product.category)
      )

      .map((product) => <MenuItem {...product} key={product.id} />);
  } else {
    categoryProducts = products
      .filter((product) => product.category === collection)
      .map((product) => <MenuItem {...product} key={product.id} />);
  }

  return (
    <Layout>
      <section className="category">
        <h1 className="category__header">{collection.replace("-", " ")}</h1>
        <div className="category__container">{categoryProducts}</div>
      </section>
    </Layout>
  );
};

export default CategoryPage;
