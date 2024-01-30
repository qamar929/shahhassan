import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/logo.png";
import {
  InboxIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";
const Footer = () => {
  return (
   
      <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>
          <div className={css.logo}>
            <img src={logo} alt="" />
            <span>Shah Hassan</span>
          </div>

          <div className={css.block}>
            <div className={css.detail}>
              <span>Contact US</span>
              <span className={css.pngLine}>
                <LocationMarkerIcon className={css.icon} />
                <span>G11 Islamabad Pakistan </span>
              </span>

              <span className={css.pngLine}>
                <InboxIcon className={css.icon}/>

<a href="/">Support@shahhassanch.com</a>
              </span>
            </div>
          </div>




          <div className={css.block}>
            <div className={css.detail}>
              <span>Account</span>
              <span className={css.pngLine}>
                <LoginIcon className={css.icon} />
               Sign In
              </span>
            </div>
          </div>


          <div className={css.block}>
            <div className={css.detail}>
              <span>Company</span>
              <span className={css.pngLine}>
                <UserIcon className={css.icon} />
              <a href="/about">About us</a>
              </span>

            </div>
          </div>

          <div className={css.block}>
            <div className={css.detail}>
              <span>Resourses</span>
              <span className={css.pngLine}>
                <LinkIcon className={css.icon} />
                <p>Safety Privacy & Terms</p>
              </span>

            </div>
          </div>
          
        </div>

        <div className={css.copyRight}>
            <span>Copyright @2024 by shah hassan, Inc.</span>
            <span>All Rights reserved.</span>

        </div>
      </div>
    
  );
};

export default Footer;
