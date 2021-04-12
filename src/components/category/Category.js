import "./Category.css";
import useFetch from "../tools/useFetch";
import ProductCard from "../productCard/ProductCard";

const Category = () => {
    /* Fetch products db */
    const items = useFetch("/products.json");

    return (
        <div className="Category">
            {/* Category Header Display Area */}
            <div
                className="category-header"
                style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: 250,
                    backgroundImage: "url(/media/plates-header.jpg)",
                }}
            >
                {/* Category Header Info Box */}
                <div className="category-header__info">
                    <h2>Plates</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam at purus pulvinar, placerat turpis ac, interdum
                        metus.
                    </p>
                </div>
            </div>

            {/* Products Display Area */}
            <div className="products">
                {items.map((item) => (
                    // Crafting product cards
                    <ProductCard
                        key={item.title}
                        title={item.title}
                        brand={item.brand}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Category;
