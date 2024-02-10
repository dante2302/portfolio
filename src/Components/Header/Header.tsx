import './Header.css';
import ContactButton from '../Contact/ContactButton';
import AboutButton from '../About/AboutButton';

export default function Header(){
    return (
        <div id="Header">
            <h1 className="names">DARIN</h1>
            <h1 className="names">ROSENOV PENCHEV</h1>
            <h2>FULLSTACK .NET ENGINEER</h2>
            <div>
                <ContactButton />
                <AboutButton />
            </div>
        </div>
    )
}