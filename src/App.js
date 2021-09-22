import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { data } from "./data/mockData";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";

function App() {
  return (
    <Router>
      <div className="page-container">
        <Header />
        <hr />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/carrinho">
            <Carrinho />
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
            <p>404 — Nada encontrado</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
