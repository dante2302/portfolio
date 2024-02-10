import NavButton from '../Nav/NavButton';
import './Header.css';

export default function Header(){
    return (
        <header id="Header">
            <h1 className="name">DARIN</h1>
            <h1 className="name">ROSENOV PENCHEV</h1>
            <h2 className="role"><span className="full">FULL</span>STACK <span className="dotnet">.NET</span> ENGINEER</h2>
            <div className="header-button-container">
                <NavButton
                    styleClass="header-button"
                    content="ABOUT ME    "
                    navigateTo="#About"
                />
                <NavButton 
                    styleClass="header-button"
                    content="CONTACT ME"
                    navigateTo="#Contact"
                />
            </div>
        </header>
    )
}