
import NavButton from "./NavButton";
import githubLogo from "../../assets/github.svg";
import linkedInLogo from "../../assets/Linkedin_logo.svg";
import resumeLogo from "../../assets/pdf-round.svg";
import resume from "../../assets/cv.pdf";
import { PropsWithChildren } from "react";

interface props extends PropsWithChildren{
    styleClass: string
}
export default function NavBar({styleClass, children}: props){
      return (
      <nav className={styleClass}>
        {children}
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