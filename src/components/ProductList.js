import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
    const [topNProducts, setTopNProducts] = useState([]);

    useEffect(() => {
        const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
        const topN = sortedProducts.slice(0, 5);
        setTopNProducts(topN);
    }, [products]);

    return (
        <div className="product-list">
            {topNProducts.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
