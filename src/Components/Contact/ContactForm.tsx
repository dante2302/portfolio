import { useState } from "react"

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
        <form>
            <input
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={changeHandler}
            >
            </input>
            <input
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={changeHandler}
            >
            </input>
            <input
                type="email"
                name="email"
                value={formState.email}
                onChange={changeHandler}
            >
            </input>
            <textarea
                name="email"
                value={formState.message}
                onChange={changeHandler}
            ></textarea>
            <button></button>
        </form>
    )
}