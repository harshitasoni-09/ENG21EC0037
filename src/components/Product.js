import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({ product }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://via.placeholder.com/150?text=${product.productName}`} className="img-fluid rounded-start" alt={product.productName} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text">Rating: {product.rating}</p>
                        <p className="card-text">Price: ${product.price}</p>
                        <p className="card-text">Discount: {product.discount}%</p>
                        <p className="card-text">Availability: {product.availability}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
