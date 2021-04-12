import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import "./ProductCard.css";
import priceFormatter from "../tools/priceFormatter";

function ProductCard(props) {
    /* Import My Cart Context */
    const [myCart, setMyCart, addToMyCart] = useContext(CartContext);

    return (
        <div className="product-card" key={props.title}>
            {/* Product Card Image */}
            <img
                className="product-card__image"
                src={`/media/${props.image}`}
                alt={props.title}
            />

            {/* Product Card Short Details */}
            <div>
                <p className="product-brand">{props.brand}</p>
                <p className="product-title">{props.title}</p>
                <p className="product-price">
                    ${priceFormatter.format(props.price)}
                </p>
            </div>

            {/* Buttons when hover */}
            <div className="product-buttons">
                {/* Button to view product details */}
                <Link
                    to={`/product/${props.title}`}
                    style={{ textDecoration: "none" }}
                >
                    <button className="view-details-btn">VIEW DETAILS</button>
                </Link>

                {/* Button to add this product into My Cart*/}
                <button
                    className="add-to-cart--btn"
                    onClick={() => addToMyCart(props)}
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
