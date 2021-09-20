import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";

export const data = {
  products: [
    {
      id: "001",
      name: "TV",
      slug: "tv-samsung",
    },
    {
      id: "002",
      name: "Som",
      slug: "som-philips",
    },
  ],
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {data.products.map((product, index) => (
            <Route
              key={index}
              path={`/${product.slug}`}
              exact={true}
              children={<Product productData={product} />}
            />
          ))}
          <Route path="*">
            <p>404 — Nothing found ☹</p>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
