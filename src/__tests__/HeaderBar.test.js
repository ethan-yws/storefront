import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import HeaderBar from "../components/headerBar/HeaderBar";
import { CartProvider } from "../components/cart/CartContext";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
    render(
        <CartProvider>
            <Router>
                <HeaderBar />
            </Router>
        </CartProvider>
    );
});

test("should render store logo image", () => {
    const logo = screen.queryByAltText("store logo");
    expect(logo).toBeInTheDocument();
});

test("should render header - HOME", () => {
    const homeLink = screen.queryByText("HOME");
    expect(homeLink).toBeInTheDocument();
});

test("should render header - SHOP", () => {
    const shopLink = screen.queryByText("SHOP");
    expect(shopLink).toBeInTheDocument();
});

test("should render header - JOURNAL", () => {
    const journalLink = screen.queryByText("JOURNAL");
    expect(journalLink).toBeInTheDocument();
});

test("should render header - MORE", () => {
    const textEl = screen.queryByText("MORE");
    expect(textEl).toBeInTheDocument();
});

test("should render header - MY CART", () => {
    const textEl = screen.queryByText("MY CART (0)");
    expect(textEl).toBeInTheDocument();
});

// /* 1 product in My Cart */
// test("test Navi Bar quantity when 1 product inside my cart", () => {
//     const [myCart, setMyCart, addToMyCart] = useContext(CartContext);
//     const product = {
//         title: "Blue Stripe Stoneware Plate",
//         brand: "Kiriko",
//         price: 40,
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
//         image: "blue-stripe-stoneware-plate.jpg",
//     };
//     addToMyCart(product);
// });
