import githubLogo from "../../assets/github.svg";
import linkedInLogo from "../../assets/Linkedin_logo.svg";
import resumeLogo from "../../assets/pdf-round.svg";
import resume from "../../assets/cv.pdf";
import { PropsWithChildren, useEffect, useState } from "react";

interface props extends PropsWithChildren{
    styleClass: string,
    closeModal?: () => void
}
export default function NavBar({ styleClass, children, closeModal }: props) {
  const SCROLL_TOP_BOUNDARY = 170;
  const [aboutScroll, setAboutScroll] = useState(-1);
  const [projectsScroll, setProjectsScroll] = useState(0);
  const [contactScroll, setContactScroll] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollTop(window.scrollY);
      const about = document.querySelector("#About");
      const projects = document.querySelector("#Projects");
      const contact = document.querySelector("#Contact");
      if (about == null) return;
      if (projects == null) return
      if (contact == null) return;

      setAboutScroll(about.getBoundingClientRect().top);
      setProjectsScroll(projects.getBoundingClientRect().top);
      setContactScroll(contact.getBoundingClientRect().top);
    }
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  })

  function handleScrollClick(elementScroll: number){
    closeModal && closeModal();
    window.scrollTo(0, elementScroll + scrollTop - 100);
  }
  return (
    <nav className={styleClass || `nav-bar ${scrollTop > SCROLL_TOP_BOUNDARY  ? "scrolled" : ""}`}>
      {children}
      <div className="internal-link-container">
        <a className="nav-button" onClick={() => { handleScrollClick(-window.scrollY + 80) }}>Home</a>
        <a className="nav-button" onClick={() => { handleScrollClick(aboutScroll) }} >About</a>
        <a className="nav-button" onClick={() => { handleScrollClick(projectsScroll) }}>Projects</a>
        <a className="nav-button" onClick={() => { handleScrollClick(contactScroll) }}>Contact</a>
      </div>
      <div>
        <a className="logo-link" href="https://github.com/dante2302" target="_blank"><img src={githubLogo} className="nav-logo" /></a>
        <a className="logo-link" href="https://www.linkedin.com/in/darinpenchev/" target="_blank"><img src={linkedInLogo} className="nav-logo" /></a>
        <a className="logo-link" href={resume} target="_blank"><img src={resumeLogo} className="nav-logo adjusted-resume-logo" /></a>
      </div>
    </nav>
  )
}