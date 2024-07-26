import NavBar from './NavBar';

import { useState, useEffect } from 'react';

import menuLogo from "../../assets/menu.svg";
import closeLogo from "../../assets/close.svg";
import "./Nav.css";

export default function Nav({scrollTop}: {scrollTop: number}) {
    const DEVICE_WIDTH_BOUNDARY = 768;
    const SCROLL_TOP_BOUNDARY = 170;

    const [isModal, setModal] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth < DEVICE_WIDTH_BOUNDARY);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < DEVICE_WIDTH_BOUNDARY);
    }
    window.addEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    isModal && document.body.classList.add("noscroll");
    return () => document.body.classList.remove("noscroll");
  }, [isModal])

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
          styleClass={scrollTop > SCROLL_TOP_BOUNDARY ? 'nav-bar scrolled' : ''}
          isModal={isModal}
          closeModal={() => setModal(false)}
          />
      }
      {isModal && 
        <NavBar 
        styleClass="nav-modal" 
        closeModal={() => setModal(false)} 
        isModal={isModal} 
        />
      }
    </>
    )
}