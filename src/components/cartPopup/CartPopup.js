import React, { useContext } from "react";
import "./CartPopup.css";
import { CartContext } from "../cart/CartContext";
import priceFormatter from "../tools/priceFormatter";
import { Link } from "react-router-dom";

function CartPopup() {
    // Import My Cart Context
    const [myCart, setMyCart, addToMyCart] = useContext(CartContext);

    /*------------------- Calculating Total -------------------*/
    const calculateTotal = () => {
        return myCart.reduce(
            (total, subTotal) => total + subTotal.price * subTotal.quantity,
            0
        );
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

    return (
        <div className="cart-popup">
            {/* Dropdown Page */}
            <div className="dropdown-page">
                {/* Product List */}
                <div className="product-list">
                    {myCart.map((item) => (
                        // Single product row
                        <div key={item.title} className="product-row">
                            {/* Product image */}
                            <img
                                className="product-row__image"
                                src={`/media/${item.image}`}
                                alt={item.title}
                            />
                            {/* Product info */}
                            <div className="product-row__info">
                                <div className="product-row__info__left">
                                    <span className="info__title">
                                        {item.title}
                                    </span>
                                    <span className="info__cross"> x </span>
                                    <span className="info__quantity">
                                        {item.quantity}
                                    </span>
                                    <p className="info__brand">{item.brand}</p>
                                    <p className="info__price">
                                        $
                                        {priceFormatter.format(
                                            item.price * item.quantity
                                        )}
                                    </p>
                                </div>
                                {/* Delete Button */}
                                <div className="product-row__info__right">
                                    <p onClick={() => deleteFromMyCart(item)}>
                                        X
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Total on buttom */}
                <div className="total-bottom">
                    <p>Total</p>
                    <p>${priceFormatter.format(calculateTotal())}</p>
                </div>
                {/* Checkout buttons on buttom */}
                <div className="buttons-bottom">
                    <Link to="/cart">
                        <button className="view-cart">View Cart</button>
                    </Link>
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartPopup;
