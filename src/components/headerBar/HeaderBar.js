import React, { useContext, useEffect, useRef, useState } from "react";
import "./HeaderBar.css";
import { CartContext } from "../cart/CartContext";
import { Link } from "react-router-dom";
import CartPopup from "../cartPopup/CartPopup";

function HeaderBar() {
    // Import My Cart Context
    const [myCart, setMyCart, addToMyCart] = useContext(CartContext);

    // Count Total Quantities of products in My Cart
    const countTotalQuant = () => {
        return myCart.reduce(
            (totalQuant, item) => totalQuant + item.quantity,
            0
        );
    };

    /*---------------- Popup Open/Close Handler --------------*/
    const popupRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const popupHandler = () => {
        setIsOpen(!isOpen);
    };

    // Dimiss if click outside the popup
    const handleClickOutside = (e) => {
        if (popupRef.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="header-bar">
            <Link to="/">
                {/* Logo image on the left*/}
                <img
                    className="store-logo"
                    src="/media/logo.png"
                    alt="store logo"
                />
            </Link>

            {/* Navi Bar Menus at center */}
            <div className="links-center">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <p>HOME</p>
                </Link>
                <p className="dropdown-menu">
                    SHOP<span className="triangle-down"></span>
                </p>

                <p>JOURNAL</p>
                <p className="dropdown-menu">
                    MORE
                    <span className="triangle-down"></span>
                </p>
            </div>

            {/* My Cart Button on the right */}
            <div className="my-cart-dropdown" ref={popupRef}>
                <div className="my-cart-link-container" onClick={popupHandler}>
                    <p className="my-cart-link">
                        MY CART ({countTotalQuant()})
                        <span className="my-cart-link__triangle-down"></span>
                    </p>
                </div>

                {/* Cart Popup Component */}
                {isOpen && <CartPopup />}
            </div>
        </div>
    );
}

export default HeaderBar;
