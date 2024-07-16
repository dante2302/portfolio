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
    const [errorState, setErrorState] = useState("");

    function changeHandler(e: any){
        ;
        setFormState((state) => (
            {...state, [e.target.name]: `${e.target.value}`}
        ))
    }

    async function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        const response = await fetch("http://localhost:5183/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formState),
            mode: "cors"
        })
        console.log(response);
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
                name="message"
                value={formState.message}
                onChange={changeHandler}
            ></textarea>
            </div>
            <button className="contact-submit" onClick={(e) => onSubmit(e)}>Submit</button>
        </form>
    )
}