import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Pay from '../../Home/Pay/Pay';
import SearchBar from '../../Home/SearchBar/SearchBar';
import ProductBottomPart from '../ProductBottomPart/ProductBottomPart';
import ProductTopPart from '../ProductTopPart/ProductTopPart';

const ProductDetails = () => {
    return (
        <div className="product-details-area">
            <Header></Header>
            <SearchBar></SearchBar>
            <ProductTopPart />
            <ProductBottomPart />
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default ProductDetails;