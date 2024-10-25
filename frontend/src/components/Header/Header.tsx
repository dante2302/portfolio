import './Header.css';

export default function Header(){
    return (
        <header id="Header">
            <h1 className="name">DARIN</h1>
            <h1 className="name">ROSENOV PENCHEV</h1>
            <h2 className="role"><span className="full">SOFT</span><span className="dotnet">WARE</span> ENGINEER</h2>
 
            <div className="header-button-container">
                <a className='header-button' href="#About">ABOUT ME</a>
                <a className='header-button' onClick={() => window.scrollTo(0, document.body.offsetHeight)}>CONTACT ME</a>
            </div>
        </header>
    )
}