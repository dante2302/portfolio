import NavBar from "./NavBar"

interface props{
    setModal: (isModal: boolean) => void
}

export default function NavModal({setModal}: props){
    return(
        <div className='modal'>
            <div className='overlay' onClick={() => setModal(false)}>
                <NavBar styleClass="nav-modal"/>
            </div>
        </div>
    )
}