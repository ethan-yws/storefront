import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import priceFormatter from "../tools/priceFormatter";
import { CartContext } from "../cart/CartContext";

const Product = ({ match }) => {
    /* Import My Cart Context */
    const [myCart, setMyCart, addToMyCart] = useContext(CartContext);

    // Adding product(s) into My Cart
    const addToCart = () => {
        // Bundle the products
        const productsToAdd = Array(quantity).fill(product);
        for (let item of productsToAdd) {
            addToMyCart(item);
        }
    };

    useEffect(() => {
        fetchItem();
        // console.log(match);
    }, []); // <-- run only once during lifetime of this component

    const [product, setProduct] = useState({});

    /* Get the product from products db by title */
    const fetchItem = async () => {
        const fetchItem = await fetch("/products.json");
        const items = await fetchItem.json();
        // // adding quantity property
        // for (let item of items) item["quantity"] = 0;
        const item = items.find((x) => x.title === match.params.id);
        setProduct(item);
    };

    /* Increase/Decrease Quantity */
    const [quantity, setQuantity] = useState(1);

    const increaseQuant = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuant = () => {
        // prevent decreaseing to negative number
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="Product">
            {/* Product Path at the Top */}
            <p className="product-path">
                Home / Plates / <span>{product.title}</span>
            </p>

            {/* Product Display Area */}
            <div className="product-details">
                {/* Product Image on Left */}
                <img
                    className="product-details__left"
                    src={`/media/${product.image}`}
                    alt={product.title}
                />

                {/* Product Details on Right */}
                <div className="product-details__right">
                    {/* Product Details*/}
                    <p className="brand">{product.brand}</p>
                    <p className="title">{product.title}</p>
                    <p className="price">
                        ${priceFormatter.format(product.price)}
                    </p>
                    <p className="description">{product.description}</p>

                    {/* Add to Cart Section */}
                    <div className="add-to-cart">
                        {/* Quantity Operations */}
                        <div className="add-to-cart__left">
                            <div className="quantity">{quantity}</div>

                            {/* Increase/Decrease Quantity */}
                            <div className="quantity-btns">
                                <button onClick={increaseQuant}>+</button>
                                <button
                                    className="quantity__dec"
                                    onClick={decreaseQuant}
                                >
                                    -
                                </button>
                            </div>
                        </div>

                        {/* Add To Cart Button */}
                        <button
                            className="add-to-cart__right"
                            onClick={addToCart}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
