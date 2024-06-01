import React, { useState, useEffect } from 'react';

const Filter = ({ onFilter, defaultValues }) => {
    const [company, setCompany] = useState(defaultValues.company);
    const [category, setCategory] = useState(defaultValues.category);
    const [top, setTop] = useState(defaultValues.top);
    const [minPrice, setMinPrice] = useState(defaultValues.minPrice);
    const [maxPrice, setMaxPrice] = useState(defaultValues.maxPrice);

    useEffect(() => {
        onFilter({ company, category, top, minPrice, maxPrice });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter({ company, category, top, minPrice, maxPrice });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
                <label htmlFor="company" className="form-label">Company</label>
                <input type="text" className="form-control" id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input type="text" className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="top" className="form-label">Top N Products</label>
                <input type="number" className="form-control" id="top" value={top} onChange={(e) => setTop(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="minPrice" className="form-label">Min Price</label>
                <input type="number" className="form-control" id="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="maxPrice" className="form-label">Max Price</label>
                <input type="number" className="form-control" id="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Filter</button>
        </form>
    );
};

export default Filter;
