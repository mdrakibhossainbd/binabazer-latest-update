import React from 'react';
import '../../MainCSS/MainCSS.css';

const Header = () => {
    return (
        <div className="header" >
            {/* Top Bar Section Start  */}

            <div className="topSection ">
                <div className="container">
                    <div className="d-flex justify-content-between  align-items-center">
                        <small> <i className="fa fa-phone" aria-hidden="true"></i> 01748686269 (10PM - 5PM)</small>
                        <marquee width="60%" direction="left" height="30%">
                            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, adipisci.</small>
                        </marquee>
                        <small> <i className="fa fa-user" aria-hidden="true"></i> Registration Now</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;