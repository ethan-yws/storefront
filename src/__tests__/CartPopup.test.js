import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import CartPopup from "../components/cartPopup/CartPopup";
import { CartProvider } from "../components/cart/CartContext";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
    render(
        <CartProvider>
            <Router>
                <CartPopup />
            </Router>
        </CartProvider>
    );
});

test("should render Total text at bottom", () => {
    const totalText = screen.queryByText("Total");
    expect(totalText).toBeInTheDocument();
});

test("should render $0.00 text at bottom", () => {
    const numberText = screen.queryByText("$0.00");
    expect(numberText).toBeInTheDocument();
});

test("should render View Cart Button at bottom", () => {
    const viewCartBtn = screen.queryByText("View Cart");
    expect(viewCartBtn).toBeInTheDocument();
});

test("should render Checkout Button at bottom", () => {
    const checkoutBtn = screen.queryByText("Checkout");
    expect(checkoutBtn).toBeInTheDocument();
});
