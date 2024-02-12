import { useState } from "react"
import "./Contact.css";
const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
}

export default function ContactForm()
{

    const [formState, setFormState] = useState(initialFormState);
    function changeHandler(e: any){
        ;
        setFormState((state) => (
            {...state, [e.target.name]: `${e.target.value}`}
        ))
    }

    function onSubmit(){

    }

    function validateEmail(email: string){ 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const emailErrorMessage = 'Invalid Email'
        if (emailRegex.test(email)) return ''
        return emailErrorMessage

        //  Valid emails consist of : 
        // - Atleast one character before @
        // - One @ symbol
        // - Atleast one character after @
        // - Atleast one .
        // - Atleast one character after .
    }

    return(
        <form className="contact-form">
            <div className="names-container">
                <div className="input-container">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={changeHandler}
                    >
                    </input>
                </div>
                <div className="input-container">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={changeHandler}
                    >
                    </input>
                </div>
            </div>

            <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={changeHandler}
            >
            </input>
            </div>
            <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="email"
                value={formState.message}
                onChange={changeHandler}
            ></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
}