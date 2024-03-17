import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Button from "@mui/material/Button";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import { SliderProducts } from "../../data/products";
import { useDispatch } from "react-redux";
import { addCart } from "../../Redux/Reducers/cartSlice";
const Slider = () => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      console.log("products", products);
    };

    getProducts();
    console.log("products", products);

}, []);
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addCart(product));
  };
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s" key={slide.name}>
              <div className="name">
                <span> {slide.name} </span>
                <span> {slide.detail} </span>
              </div>

              <span>{slide.price}$</span>
              <Button
                variant="outlined"
                onClick={() => addToCartHandler(slide)}
              >
                add Cart
              </Button>
            </div>

            <img src={slide.img} alt="product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
