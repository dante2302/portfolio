import ContactForm from "./ContactForm";

export default function Contact(){
    return(
        <div className="outer-contact-wrap" id="Contact">
            <div className="contact-info-container">
                <h3>Contact Me</h3>
                <h6>darinpenchev.420@gmail.com</h6>
                <h6></h6>
            </div>
            <div className="inner-contact-wrap">
                <ContactForm /> 
            </div>

        </div>
    )
}