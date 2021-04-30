import { Switch, Route } from "react-router-dom";
import ProductPage from "./pages/product-page/product-page";
import NotFound from "./components/not-found/not-found";
import CheckoutFormPage from "./pages/checkout-form-page/checkout-form-page";
import CategoryPage from "./pages/category/category-page";
import Homepage from "./pages/homepage/homepage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/:category" component={CategoryPage} />
        <Route path="/shop/product/:id" component={ProductPage} />
        <Route path="/checkout" component={CheckoutFormPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
