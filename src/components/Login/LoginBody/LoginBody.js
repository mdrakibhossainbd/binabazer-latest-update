import React from 'react';
import { Link } from 'react-router-dom';
import './LoginBody.css';

const LoginBody = () => {
    return (
        <div className="login-body">
            <div className="container">
                <h4>ACCOUNT LOGIN</h4>
                <div className="login-area">
                    <div className="row">
                        <div className="col-md-6 login-left">
                            <h5>NEW CUSTOMER</h5>
                            <div className="underLine"></div>
                            <p>By creating an account you will be able to shop faster, be up to date on an
                                order's status, and keep track of the orders you have previously made.</p>
                            <Link to="/registration">
                                <button className="reg-btn ">Registration Now</button>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <h5>RETURNING CUSTOMER</h5>
                            <div className="underLine"></div>
                            <div className="login-input">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input type="text" placeholder="Email or Mobile Number" className="form-control" />
                                <br />
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                <input type="password" placeholder="Password" className="form-control " />
                                <a href="#">Forget Password ?</a>
                                <button className="btn-login">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginBody;