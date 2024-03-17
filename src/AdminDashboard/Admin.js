import React, {useState} from 'react'
import './admin.css'
import Aheader from "./Aheader";
import Asidebar from "./Asidebar";
import Ahome from "./Ahome";

export default function Admin() {
    
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
   
      
<div className='grid-container'>

      <Aheader OpenSidebar={OpenSidebar}/>
      <Asidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Ahome />

   
    </div>

  )
}
