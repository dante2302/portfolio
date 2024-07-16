import './Header.css';

export default function Header(){
    return (
        <header id="Header">
            <h1 className="name">DARIN</h1>
            <h1 className="name">ROSENOV PENCHEV</h1>
            <h2 className="role"><span className="dotnet">.NET</span> ENGINEER</h2>
{/* <span className="full">FULL</span>STACK  */}
            <div className="header-button-container">
                <a className='header-button' href="#About">ABOUT ME</a>
                <a className='header-button' href="#Contact">CONTACT ME</a>
            </div>
        </header>
    )
}