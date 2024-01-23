import React from 'react'
import css from './Footer.module.css'
import logo from "../../assets/logo.png"
import { InboxIcon,
PhoneIcon,
LocationMarkerIcon,
LoginIcon,
UserIcon,
LinkIcon} from "@heroicons/react/outline"
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooterWrapper}>
            <hr/>

<div className={css.cFooter}>
    <div className={css.logo}>
    <img src={logo} alt=''/>
    <span>Shah Hassan</span>

    </div>

    <div className={css.block}>
<div className={css.detail}>
    <span>Contact US</span>
    <span className={css.pngLine} >
  <LocationMarkerIcon  className={css.icon}/>
  <span>G11 Islamabad Pakistan </span>
    
    </span>

</div>

    </div>

</div>
        </div>
      
    </div>
  )
}

export default Footer
