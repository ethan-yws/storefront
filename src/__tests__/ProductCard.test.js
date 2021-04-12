import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductCard from "../components/productCard/ProductCard";
import { CartProvider } from "../components/cart/CartContext";
import { BrowserRouter as Router } from "react-router-dom";

test("should render a product card contains the given info - 1", () => {
    let price = 28;
    render(
        <CartProvider>
            <Router>
                <ProductCard title="mac" brand="apple" price={price} />
            </Router>
        </CartProvider>
    );

    const t = screen.queryByText("mac");
    expect(t).toBeInTheDocument();

    const b = screen.queryByText("apple");
    expect(b).toBeInTheDocument();

    const p = screen.queryByText("$28.00");
    expect(p).toBeInTheDocument();
});

test("should render a product card contains the given info - 2", () => {
    let price = 17;
    render(
        <CartProvider>
            <Router>
                <ProductCard title="M4" brand="BMW" price={price} />
            </Router>
        </CartProvider>
    );

    const t = screen.queryByText("M4");
    expect(t).toBeInTheDocument();

    const b = screen.queryByText("BMW");
    expect(b).toBeInTheDocument();

    const p = screen.queryByText("$17.00");
    expect(p).toBeInTheDocument();
});

test("should render a product card contains the given info - 3", () => {
    let price = 25;
    render(
        <CartProvider>
            <Router>
                <ProductCard title="sda" brand="soda" price={price} />
            </Router>
        </CartProvider>
    );

    const t = screen.queryByText("sda");
    expect(t).toBeInTheDocument();

    const b = screen.queryByText("soda");
    expect(b).toBeInTheDocument();

    const p = screen.queryByText("$25.00");
    expect(p).toBeInTheDocument();

    const viewDetails = screen.queryByText("VIEW DETAILS");
    expect(viewDetails).toBeInTheDocument();

    const addToCart = screen.queryByText("ADD TO CART");
    expect(addToCart).toBeInTheDocument();
});
