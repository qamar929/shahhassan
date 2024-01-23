import React from 'react'
import css from './header.module.css'
import logo from  '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}> 
        <img src={logo} alt=""/>
       
        </div>
        <div className={css.right}>

          <div className={css.menu}>
               <ul className={css.menu}>
                <li>Services</li>
                <li>Our Products</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
                 </ul>
          </div>
          <input type="text" className={css.search} placeholder='search'/>

        <CgShoppingBag className={css.cart}/>

        </div>
      
    </div>
  )
}

export default Header
