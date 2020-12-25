import React from 'react';
import ProductImages from '../ProductImages/ProductImages';
import ShortDetails from '../ShortDetails/ShortDetails';


const ProductTopPart = () => {
    return (
        <div className="product-top-part">
            <div className="container mt-5 p-4" style={{ backgroundColor: "#fff" }}>
                <div className="row">
                    <div className="col-md-6">
                        <ProductImages />
                    </div>
                    <div className="col-md-6">
                        <ShortDetails />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTopPart;