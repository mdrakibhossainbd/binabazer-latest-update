import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductImages.css";
import fakeData from '../../../fakeData';
import { useParams } from 'react-router-dom';



const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};


const ProductImages = () => {

  const { areaId } = useParams();
  const selectedProduct = fakeData.find(area => area.id === areaId);
  console.log(selectedProduct);

  const { img } = selectedProduct;

  return (
    <div className="product-images-area ">
      <div className="big-img py-4">
        <img src={img} className="img-fluid" alt="" />
      </div>
      <div className="short-img mt-5">
        {/* <Slider {...settings}> */}

        {/* <div className="single-img">
            <img src={img} alt="" />
          </div> */}
        {/* <div className="single-img">
            <img src={img} alt="" />
          </div> */}
        {/* <div className="single-img">
            <img src={bigImg} alt="" />
          </div>
          <div className="single-img">
            <img src={bigImg} alt="" />
          </div> */}
        {/* </Slider> */}
        <div className="row">
          <div className="col-md-6">
            <img src={img} alt="" />
          </div>
          <div className="col-md-6">
            <img src={img} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductImages;