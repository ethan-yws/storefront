import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderBar from "./components/headerBar/HeaderBar";
import Category from "./components/category/Category";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import { CartProvider } from "./components/cart/CartContext";

const App = () => {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <HeaderBar />

                    <Switch>
                        <Route exact path="/" component={Category} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/product/:id" component={Product} />
                    </Switch>
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
