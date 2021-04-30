import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/shop.context";
import { CartContext } from "../../context/cart-context";
import { withRouter } from "react-router-dom";
import ProductDetails from "../../components/product-details/product-details";
import ProductGallery from "../../components/product-gallery/product-gallery";
import ProductProposal from "../../components/product-proposal/product-proposal";
import Layout from "../../shered/layout/layout";
import "./product-page.styles.scss";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

function ProductPage({ match, history: { push } }) {
  const { products } = useContext(ProductsContext);
  const { hidden } = useContext(CartContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    if (!product) {
      return push("/shop");
    }
    setProduct(product);
  }, [products, id, push, product]);

  //we can add spinner insted of null
  if (!product) {
    return null;
  }

  const { title, price, salePrice, sale, images, productDescription } = product;
  return (
    <Layout>
      <section className="product">
        <div className="product__first">
          <ProductGallery className="product__first--gallery" images={images} />
          <ProductDetails
            className="product__first--details"
            id={id}
            title={title}
            price={price}
            salePrice={salePrice}
            sale={sale}
            images={images}
            productDescription={productDescription}
          />
        </div>
        <div className="product__second">
          <ProductProposal />
        </div>
        {hidden ? null : <CartDropdown />}
      </section>
    </Layout>
  );
}

export default withRouter(ProductPage);
