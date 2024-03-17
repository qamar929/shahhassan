import React, { useState } from "react";
import css from "./Products.module.css"
import {ProductsData} from "../../data/products";
import Plane from "../../assets/plane.png";
import {useAutoAnimate} from '@formkit/auto-animate/react';
const Products = (props) => {

  const [parent] =useAutoAnimate()
  const [MenuProducts, setMenuProducts] = useState(ProductsData)

  const filter =(type) =>{

    setMenuProducts(ProductsData.filter((product)=>product.type===type))
  }
 
 console.log(MenuProducts)
  return (
    <div ref={props.ourProducts} className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
          <li onClick={()=>filter("skin care")}>Skin Care</li>
          <li onClick={()=>filter("conditioner")}>Conditioner</li>
          <li onClick={()=>filter("foundation")}>Foundation</li>
        </ul>

        <div className={css.list} ref={parent}>
           
          {
       
          MenuProducts.map((prod,i) => (

            
            <div className={css.product}>
               
              <div className="left-s" key={i}>
                <div className="name">
                  <span> {prod.name}</span>
                  <span>{prod.detail}</span>
                </div>
                <span>{prod.price} $</span>
                <div>  Shop now</div> 
              </div>
              <img src={prod.img} alt="" className="img-p"/>
            </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
