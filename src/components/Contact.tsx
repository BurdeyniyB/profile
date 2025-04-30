import { useState } from "react";
import contactCSS from "../styles/Contact.module.css"
import { sendMessage } from "../http/contactAPI";

const Contact = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        text: false
    });


    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setText('');
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const newErrors = {
            firstName: firstName.trim() === "",
            lastName: lastName.trim() === "",
            email: email.trim() === "",
            phone: phone.trim() === "",
            text: text.trim() === ""
        };

        setErrors(newErrors);

        if (Object.values(newErrors).includes(true)) return;

        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("text", text);

        await sendMessage(formData).catch(console.error);
        clearForm();
    };


    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setter(event.target.value);
        };



    return (
        <section id="contact" className={contactCSS.contact_wrapper}>
            <h3 className="SectionTitle">Get in Touch</h3>

            <div className={contactCSS.contact}>
                <div className={contactCSS.contact_form}>
                    <div>
                        <h4>Send a Message</h4>
                        <p className={contactCSS.contact_smallText}>You may experience some delay because the application is hosted on a free server, which needs to wake up before processing requests.</p>
                    </div>

                    <div className={contactCSS.input_wrapper}>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleInputChange(setFirstName)}
                            className={errors.firstName ? contactCSS.error : ""}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleInputChange(setLastName)}
                            className={errors.lastName ? contactCSS.error : ""}
                        />
                    </div>

                    <div className={contactCSS.input_wrapper}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleInputChange(setEmail)}
                            className={errors.email ? contactCSS.error : ""}
                        />
                        <input
                            type="text"
                            placeholder="Enter phone"
                            value={phone}
                            onChange={handleInputChange(setPhone)}
                            className={errors.phone ? contactCSS.error : ""}
                        />
                    </div>

                    <textarea
                        placeholder="Message"
                        value={text}
                        onChange={handleInputChange(setText)}
                        className={errors.text ? contactCSS.error : ""}
                    />

                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <div className={contactCSS.contact_details}>
                    <h4>Contact Info</h4>

                    <div className={contactCSS.info_wrapper}>
                        <a href="tel:0973431619">
                            <i className="ri-phone-line"></i>
                        </a>
                        <span>+380 97 343 16 19</span>
                    </div>
                    <div className={contactCSS.info_wrapper}>
                        <a href="mailto: borisburdeyniy@gmail.com">
                            <i className="ri-mail-line"></i>
                        </a>
                        <span>borisburdeyniy@gmail.com</span>
                    </div>
                    <div className={contactCSS.social}>
                        <a href="https://t.me/Raikern" target="_blank" rel="noopener noreferrer">
                            <i className="ri-telegram-line"></i>
                        </a>
                        <a href="https://wa.me/380973431619" target="_blank" rel="noopener noreferrer">
                            <i className="ri-whatsapp-line"></i>
                        </a>
                        <a href="https://www.snapchat.com/add/borisburdieiniy" target="_blank" rel="noopener noreferrer">
                            <i className="ri-snapchat-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact