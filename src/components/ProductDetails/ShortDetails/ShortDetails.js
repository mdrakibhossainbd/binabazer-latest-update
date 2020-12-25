import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../../fakeData/';
import Quantity from '../Quantity/Quantity';
import Rating from '../Rating/Rating';
import ShortInfo from '../ShortInfo/ShortInfo';
import SocialShare from '../SocialShare/SocialShare';

const ShortDetails = () => {
    const { areaId } = useParams();
    const selectedProduct = fakeData.find(area => area.id === areaId);
    console.log(selectedProduct);

    const { name } = selectedProduct;
    return (
        <div className="short-details-area px-4">
            <div className="short-info">
                <h2 > {name} </h2>
                <ShortInfo></ShortInfo>
            </div>
            <div className="rating-count d-flex align-items-center mb-3">
                <div className="total-rating">
                    1 Customer Review
                </div>
                <Rating />
            </div>
            <Quantity />
            <SocialShare />
        </div>
    );
};

export default ShortDetails;