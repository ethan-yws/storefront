import React, { useEffect, useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    /*---- My Cart object array with additional 'Quantity' property ---*/
    const [myCart, setMyCart] = useState([]);
    console.log(myCart); // <-- testing purpose

    /*----------- Adding product to my cart -------------*/
    // temp cart as mediator
    const tmpCart = [...myCart];

    const addToMyCart = (product) => {
        // if product object already in my Cart
        // update quantity property
        if (isContained(product)) {
            for (let i of tmpCart) {
                if (i.title === product.title) {
                    i["quantity"] += 1;
                }
            }
            // otherwise, inits quantity property for new product object
            // and push it into mediator
        } else {
            let tmp = { ...product };
            tmp["quantity"] = 1;
            tmpCart.push(tmp);
        }
        // Merge mediator and current My Cart
        setMyCart(tmpCart);
    };

    // Helper Method
    const isContained = (p) => {
        for (let x of tmpCart) {
            if (x.title === p.title) {
                return true;
            }
        }

        return false;
    };

    return (
        <CartContext.Provider value={[myCart, setMyCart, addToMyCart]}>
            {props.children}
        </CartContext.Provider>
    );
};
