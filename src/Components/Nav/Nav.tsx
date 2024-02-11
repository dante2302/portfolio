import NavButton from "./NavButton";
import { useState, useEffect } from 'react';
import "./Nav.css";
import githubLogo from "../../assets/github.svg";
import linkedInLogo from "../../assets/Linkedin_logo.svg";
import resumeLogo from "../../assets/pdf-round.svg";
import resume from "../../assets/cv.pdf";

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
        <a className="logo-link" href="https://github.com/dante2302" target="_blank"><img src={githubLogo} className="nav-logo" /></a>
        <a className="logo-link" href="https://www.linkedin.com/in/darinpenchev/" target="_blank"><img src={linkedInLogo} className="nav-logo" /></a>
        <a className="logo-link" href={resume} target="_blank"><img src={resumeLogo} className="nav-logo adjusted-resume-logo"/></a>
      </nav>
    )
}