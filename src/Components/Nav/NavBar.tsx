import githubLogo from "../../assets/github.svg";
import linkedInLogo from "../../assets/Linkedin_logo.svg";
import resumeLogo from "../../assets/pdf-round.svg";
import resume from "../../assets/cv.pdf";
import { PropsWithChildren } from "react";

interface props extends PropsWithChildren{
    styleClass: string,
    closeModal?: () => void
}
export default function NavBar({styleClass, children, closeModal}: props){
      return (
      <nav className={styleClass}>
          {children}
          <div className="internal-link-container">
            <a className="nav-button" onClick={() => { scrollTo(0, 0); closeModal && closeModal() }}>Home</a>
            <a className="nav-button" href="#About" onClick={() => { closeModal && closeModal() }} >About</a>
            <a className="nav-button" href="#Projects" onClick={() => { closeModal && closeModal() }}>Projects</a>
            <a className="nav-button" href="#Contact" onClick={() => { closeModal && closeModal() }}>Contact</a>
          </div>
          <div>
          <a className="logo-link" href="https://github.com/dante2302" target="_blank"><img src={githubLogo} className="nav-logo" /></a>
          <a className="logo-link" href="https://www.linkedin.com/in/darinpenchev/" target="_blank"><img src={linkedInLogo} className="nav-logo" /></a>
          <a className="logo-link" href={resume} target="_blank"><img src={resumeLogo} className="nav-logo adjusted-resume-logo"/></a>
        </div>
      </nav>
      )
}