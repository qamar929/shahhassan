import React, { useEffect, useState } from "react";
import css from "./header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { FiAlignJustify } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import DialogBox from "../DialogBox";

const Header = (props) => {
  // sticky nav

  const [stickyClass, setStickyClass] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const toggleMenu =() => {
setShowMenu((showMenu) => ! showMenu)

  }
  const products = useSelector((state) => state.cart);

  const [open, setOpen] = React.useState(false);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const CartHandler = () => {
    setOpen(true);
    console.log("status", open);
  };

  const [count, setCount] = useState(0);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150
        ? setStickyClass(`${css.stickynav}`)
        : setStickyClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  useEffect(() => {
    const countProducts = async () => {
      setCount(products.length);
      //  console.log("countt",count)
    };
    countProducts();
  }, [products]);
  return (
    <>
      <div className={`${css.container} ${stickyClass} `}>
        <div className={css.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={css.right}>``
          <div className="css.bars" onClick={toggleMenu}>
            <FiAlignJustify />
          </div>
         
            <ul className={css.menu} style={{display: showMenu ? 'inherit': 'none'}}>
              <li onClick={() => scrollToSection(props.services)}>Services</li>
              <li onClick={() => scrollToSection(props.ourProducts)}>
                Our Products
              </li>
              <li>Blog</li>
              <li onClick={() => scrollToSection(props.aboutUs)}>About Us</li>
              <li>Contact Us</li>
            </ul>
          
          <input type="text" className={css.search} placeholder="search" />

          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={CartHandler}
          >
            <StyledBadge badgeContent={count} color="secondary">
              <CgShoppingBag className={css.cart} />
            </StyledBadge>
          </IconButton>
        </div>
      </div>

      <DialogBox open={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default Header;
