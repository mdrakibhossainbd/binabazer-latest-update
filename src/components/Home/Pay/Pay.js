import React from 'react';
import './Pay.css';
import pay from '../../../img/pay.png';

const Pay = () => {
    return (
        <div className="pay">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-center">Pay With</h2>
                    <img src={pay} alt="" />
                    <p>Copyright © 2020 Bina Bazar Limited. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Pay;