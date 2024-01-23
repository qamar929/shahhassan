import React from 'react'
import {Swiper ,SwiperSlide} from "swiper/react"
import { Pagination,Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import {SliderProducts} from "../../data/products"
const Slider = () => {
  return (

    
    <div className="s-container">
       
        <Swiper
       modules={[Pagination,Navigation]}
       className="mySwiper"
       navigation = {true}
       loopFillGroupWithBlank= {true}
       slidesPerView = {3} 
       spaceBetween={30} 
       slidesPerGroup={1} 
       loop={true} >
             
           
           {SliderProducts.map((slide,i) =>(

            <SwiperSlide>

                <div className='left-s' key={slide.name}>
                    <div className='name'>
                        <span> {slide.name} </span>
                        <span> {slide.detail} </span>
                    </div>

                    <span>{slide.price}$</span>
                    <div>Shop now</div>

                </div>

                <img src={slide.img} alt='product' className='img-p'/>
            </SwiperSlide>
           ))}

        </Swiper>

    </div>
  )
}

export default Slider