import { useEffect, useState } from "react"
import "./Contact.css";
import {  Hourglass } from "react-loader-spinner";
import cross from "../../assets/cross.svg";
import tick from "../../assets/tick.svg";

const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
}

export default function ContactForm() {

    const [formState, setFormState] = useState(initialFormState);
    const [submitResponse, setSubmitResponse] = useState({} as boolean);
    const [showResponse, setShowResponse] = useState(false)
    const [isLoading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    function changeHandler(e: any) {
        ;
        setFormState((state) => (
            { ...state, [e.target.name]: `${e.target.value}` }
        ))
    }

    async function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        try{
            setLoading(true);
            const response = await fetch("http://localhost:5183/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formState),
                mode: "cors"
            })
            setFormState(initialFormState);
            setShowResponse(true);
            setSubmitResponse(response.ok);
            console.log(response)
        }
        catch(er){
           console.log(er) 
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        if(Object.values(formState).every(s => s.length != 0))
        {
            setDisabled(false);
        }
        else setDisabled(true);
    }, [formState])

    return (
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
            <button 
                className="contact-submit" 
                disabled={disabled}
                onClick={(e) => {setShowResponse(false) ; onSubmit(e)}}
            >{isLoading ? <Hourglass colors={["white", "white"]} height={20} width={20}/> : "Submit"}</button>
            {showResponse &&
                (
                    submitResponse ?
                    <div className="contact-submit-success">
                        <img src={tick} />
                        <p >Your message was sent successfully.</p>
                    </div>
                        :
                    <div className="contact-submit-fail">
                        <img src={cross} />
                        <p >Something went wrong. Your message was not sent successfully</p>
                    </div>
            )
            }
        </form>
    )
}