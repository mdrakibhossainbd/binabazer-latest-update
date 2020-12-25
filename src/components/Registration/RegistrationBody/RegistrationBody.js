import React from 'react';
import './RegistrationBody.css';

const RegistrationBody = () => {
    return (
        <div className="reg">
            <div className="container">
                <h4>ACCOUNT REGISTRATION</h4>
                <div className="reg-content">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h5 className="text-center">RETURNING CUSTOMER</h5>
                            <div className="underLine"></div>
                        </div>
                    </div>
                    <div className="reg-input">
                        <div className="row">
                            <div className="col-md-4">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input type="text" placeholder="First Name*" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input type="text" placeholder="Last Name*" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input type="text" placeholder="Email*" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                <input type="text" placeholder="Password*" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                <input type="text" placeholder="Confirm Password*" className="form-control" />
                            </div>
                            <div className="col-md-4">

                            </div>
                        </div>
                        <input type="checkbox" name="registration" />
                        <label for="registration"> Iam agree with the <a href="#">Privacy Policy</a> </label>
                        <a className="already" href="#">Already have an account? Login</a>
                    </div>
                    <button className="reg-btn">REGISTRATION</button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationBody;