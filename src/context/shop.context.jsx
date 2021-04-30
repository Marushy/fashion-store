import React, { createContext, useState } from "react";
import PRODUCTS_DATA from "../data/products.data";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(PRODUCTS_DATA);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
