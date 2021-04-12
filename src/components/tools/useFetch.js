import { useEffect, useState } from "react";

const useFetch = (url) => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(url);

        const items = await data.json();
        // console.log(items);
        setItems(items);
    };

    return items;
};

export default useFetch;
