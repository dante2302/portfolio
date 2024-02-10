import NavButton from "./NavButton";
import { useState, useEffect } from 'react';
import "./Nav.css";

export default function Nav() {
    const SCROLL_TOP_BOUNDARY = 320;
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
      const handleScroll = (event: Event) => {
        setScrollTop(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <nav className={scrollTop > SCROLL_TOP_BOUNDARY ? "bg-white" : ""}>
           <NavButton 
                styleClass="nav-button"
                content="Home"
                navigateTo="#"
            />
           <NavButton 
                styleClass="nav-button"
                content="About"
                navigateTo="#About"
            />
           <NavButton 
                styleClass="nav-button"
                content="Projects"
                navigateTo="#Projects"
            />
           <NavButton 
                styleClass="nav-button"
                content="Contact"
                navigateTo="#Contact"
            />
        </nav>
    )
}