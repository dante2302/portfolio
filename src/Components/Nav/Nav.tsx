import NavBar from './NavBar';

import { useState, useEffect } from 'react';

import menuLogo from "../../assets/menu.svg";
import closeLogo from "../../assets/close.svg";
import "./Nav.css";

export default function Nav() {
    const SCROLL_TOP_BOUNDARY = 170;
    const DEVICE_WIDTH_BOUNDARY = 768;

    const [scrollTop, setScrollTop] = useState(0);
    const [isModal, setModal] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth < DEVICE_WIDTH_BOUNDARY);

    useEffect(() => {

      function handleScroll(event: Event){
        setScrollTop(window.scrollY);
      }

      function handleResize(){
        setIsMobile(window.innerWidth < DEVICE_WIDTH_BOUNDARY);
      }
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);

    return (
      <>
      {isMobile 
        ?
        <div className="hamburger-wrap">
          <button className="hamburger-button" onClick={() => setModal(!isModal)}>
            <img src={isModal ? closeLogo : menuLogo} className="nav-logo" />
          </button>
        </div>
        :
          <NavBar 
          styleClass={`nav-bar ${scrollTop > SCROLL_TOP_BOUNDARY  ? "scrolled" : ""}`}/>
      }
      {isModal && <NavBar styleClass="nav-modal" closeModal={() => setModal(false)}/>}
    </>
    )
}