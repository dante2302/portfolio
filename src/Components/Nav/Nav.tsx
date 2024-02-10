import NavButton from "./NavButton";
import "./Nav.css";

export default function Nav() {
    return (
        <nav>
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