import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { CartContext } from "../cart/CartContext";
import priceFormatter from "../tools/priceFormatter";
import { Link } from "react-router-dom";

const Cart = () => {
    /*--------------- Import My Cart context -------------- */
    const [myCart, setMyCart, addToMyCart] = useContext(CartContext);

    /*--------------- Decrease item quantity from My Cart -------------*/
    const reduceFromMyCart = (product) => {
        let tmp = [...myCart];
        for (let item of tmp) {
            if (item.title === product.title) {
                // prevent quantity to be less than 1
                if (item["quantity"] > 1) item["quantity"] -= 1;
            }
        }
        setMyCart(tmp);
    };

    /*---------- Remove one type of products from My Cart ----------- */
    const deleteFromMyCart = (product) => {
        let tmp = [...myCart];
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].title === product.title) {
                tmp.splice(i, 1);
            }
        }
        setMyCart(tmp);
    };

    /*------------------- Calculating Total -------------------*/
    const calculateTotal = () => {
        return myCart.reduce(
            (total, subTotal) => total + subTotal.price * subTotal.quantity,
            0
        );
    };

    return (
        <div className="Cart">
            <div className="page-name">Shopping Cart</div>

            {/* Product Table in My Cart */}
            <div className="product-table">
                {/* table titles Row */}
                <div className="table-titles">
                    <p className="table-titles__left">Product</p>
                    <div className="table-titles__right">
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Action</p>
                    </div>
                </div>

                {/* Product Rows */}
                <div className="product-rows">
                    {myCart.map((product) => (
                        /* Product Row */
                        <div key={product.title} className="product-row">
                            <div className="product-row__left">
                                <img
                                    className="product-image"
                                    src={`/media/${product.image}`}
                                    alt={product.title}
                                />
                                <div className="product-info">
                                    <p className="product-info__brand">
                                        {product.brand}
                                    </p>
                                    <p>{product.title}</p>
                                </div>
                            </div>
                            <div className="product-row__right">
                                {/* Quantity Operations */}
                                <div className="quantity-ops">
                                    <div className="quantity">
                                        {product.quantity}
                                    </div>

                                    {/* Increase/Decrease Quantity Buttons */}
                                    <div className="quantity-btns">
                                        <button
                                            onClick={() => addToMyCart(product)}
                                        >
                                            +
                                        </button>
                                        <button
                                            className="quantity__dec"
                                            onClick={() => {
                                                reduceFromMyCart(product);
                                            }}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>

                                {/* Subtotal */}
                                <p className="sub-total">
                                    $
                                    {priceFormatter.format(
                                        product.price * product.quantity
                                    )}
                                </p>

                                {/* Action Button */}
                                <p
                                    className="cross-mark"
                                    onClick={() => deleteFromMyCart(product)}
                                >
                                    X
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Overview Row */}
                <div className="cart-overview">
                    <p className="cart-overview__label">CART OVERVIEW</p>
                    <div className="subtotal-row">
                        <p>SUBTOTAL</p>
                        <p>${priceFormatter.format(calculateTotal())}</p>
                    </div>
                    <div className="total-row">
                        <p>TOTAL</p>
                        <p className="total-row__price">
                            ${priceFormatter.format(calculateTotal())} CAD
                        </p>
                    </div>
                </div>

                {/* Checkout Row */}
                <div className="checkout-row">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <p>Continue Shopping</p>
                    </Link>
                    <button className="checkout-row__btn">
                        Checkout (${priceFormatter.format(calculateTotal())})
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
