import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import productsData from './data/products';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [products, setProducts] = useState([]);

    const defaultFilterValues = {
        company: '',
        category: '',
        top: 10,
        minPrice: 1,
        maxPrice: 10000,
    };

    useEffect(() => {
        // Initially set products to the top 10 based on rating
        fetchProducts(defaultFilterValues);
    }, []);

    const fetchProducts = ({ company, category, top, minPrice, maxPrice }) => {
        
        const filteredProducts = productsData
            .filter(product => product.price >= minPrice && product.price <= maxPrice)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, top);
        
        setProducts(filteredProducts);
    };

    return (
        <div className="App container">
            <h1 className="my-4">Top Products</h1>
            <Filter onFilter={fetchProducts} defaultValues={defaultFilterValues} />
            <ProductList products={products} />
        </div>
    );
};

export default App;
