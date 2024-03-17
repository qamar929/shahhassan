import React ,{useRef} from 'react'
import Hero from "./Hero/Hero";
import Slider from "./Slider/Slider";
import Header from "./header/Header";

import Virtual from "./Virtual/Virtual";
import Products from "./Products/Products";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import SignUp from "./Authentication/SignUp";
import '../App.css'
export default function Client() {
 const services = useRef(null);
  const ourProducts = useRef(null);
 // const blog = useRef(null);
  const aboutUs = useRef(null);
  return (

    <div className="App">

  <Header aboutUs={aboutUs}  services ={services} ourProducts={ourProducts}/>
  <Hero/>
  <SignUp/>
  <Slider/>
  <Virtual services ={services}/>
  <Products ourProducts={ourProducts}/>
  <Testimonials aboutUs={aboutUs} />
  <Footer/>

 
    </div>
  )
}
