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
      name: "TV Samsung",
      slug: "tv-samsung",
      description: "TV Samsung de várias polegadas",
      price: 1899.99,
      img: "https://picsum.photos/id/48/250/250",
    },
    {
      id: "002",
      name: "Som Philips",
      slug: "som-philips",
      description: "Som Philips bem legal",
      price: 599.99,
      img: "https://picsum.photos/id/49/250/250",
    },
  ],
};

function App() {
  return (
    <Router>
      <div className="page-container">
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
