import React, {useRef, useState} from 'react';
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css"




const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent,setIsSent] = useState(false);
  


  const sendEmail = (e) =>{
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);

    emailjs.sendForm(
        "service_23l2ybx", // my service ID
        "template_zpbgkja", // my template Id
        form.current,
        "Xtd7V4L2WHzQpnMnH", // My Public Key
    ).then(
        () => {
            setIsSending(false);
            setIsSent(true);
            form.current.reset();
            toast.success("Message Sent Succesfully" , {
                position: "top-right",
                autoClose: 3000,
                theme: 'dark',
            });
        },
        (error) => {
            setIsSending(false);
            setIsSent(false);
            console.error("Error Sending Message: ", error);
            toast.error("Failed to send message. Please Try again.", {
                position: "top-right",
                autoClose: 3000,
                theme: 'dark',
            });
        }
    );
  };

  return (
    <section id="contact" className="contact-section">
        <ToastContainer />
        <div className="contact-title">
            <h2>Contact</h2>
            <div className="title-underline"></div>
            <p>
                I'd love to hear from you—reach out for any opportunities or questions!
            </p>
        </div>

        <div className="contact-card">
            <h3>Connect With Me <span>🚀</span></h3>


            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" placeholder="Message" rows={5} required />

                <button type="submit" className="send-btn" disabled={isSending}>

                    {isSending ? "Sending...." : "Send"}
                </button>

                {/** Feedback text */}
                {isSent && <p className="success-text">Message sent successfully ✅</p>}
            </form>
        </div>
    </section>
  )
}

export default Contact
