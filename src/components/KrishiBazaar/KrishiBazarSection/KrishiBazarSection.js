import React, { useState } from 'react';
import '../../MainCSS/MainCSS.css';
import fakeData from '../../../fakeData/krishi';
import KrishiBazarSectionCard from '../KrishiBazarSectionCard/KrishiBazarSectionCard';

const KrishiBazarSection = () => {
    const bazer = fakeData;
    const [cart, setCart] = useState(bazer);
    console.log(cart);
    return (
        <div className="bazarFirstSection">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                <a class="navbar-brand" href="#"><h2>Krishi bazaar</h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Rice <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Vegetable</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Fruits</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Fish</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Meat</a>
                        </li>
                    </ul>

                </div>
                </div>
            </nav>
            <div className="container">

                <div className="row">
                    {
                        cart.map(cart => <KrishiBazarSectionCard cart={cart} ></KrishiBazarSectionCard>)
                    }

                </div>

            </div>
        </div>
    );
};

export default KrishiBazarSection;