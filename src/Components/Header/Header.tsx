import NavButton from '../Nav/NavButton';
import './Header.css';

export default function Header(){
    return (
        <div id="Header">
            <h1 className="name">DARIN</h1>
            <h1 className="name">ROSENOV PENCHEV</h1>
            <h2>FULLSTACK .NET ENGINEER</h2>
            <div>
                <NavButton 
                    styleClass="header-button"
                    content="CONTACT ME"
                    navigateTo="#Contact"
                />
                <NavButton
                    styleClass="header-button"
                    content="ABOUT ME"
                    navigateTo="#About"
                />
            </div>
        </div>
    )
}