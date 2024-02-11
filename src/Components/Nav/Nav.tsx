import { useState, useEffect } from 'react';
import "./Nav.css";

import menuLogo from "../../assets/menu.svg";
import NavBar from './NavBar';
import NavModal from './NavModal';

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
      isMobile ?
        <button onClick={() => setModal(true)}><img src={menuLogo} className="nav-logo" /></button>
        :
          <NavBar styleClass="navBar" />
      {isModal && <NavModal />}
    </>
    )
}