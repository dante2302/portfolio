import ContactForm from "./ContactForm";

export default function Contact(){
    return(
        <div className="outer-contact-wrap" id="Contact">
            <div className="inner-contact-wrap">
                <ContactForm />
            </div>
            <div className="contact-info-container">
                <h3>Contact Me</h3>
                <h6>darinpenchev.420@gmail.com</h6>
            </div>
        </div>
    )
}