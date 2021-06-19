import React, {FormEvent} from 'react';
import emailjs from 'emailjs-com';


const ModalBuy = () => {
    function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // @ts-ignore
        emailjs.sendForm('service_zwzcuj8', 'template_nnofpol', e.target, 'user_lMzDOCxB7FMfmgkx2Qr4C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // @ts-ignore
        e.target.reset();
    }
    return <div>
        <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" id="name" />
            <label>Email</label>
            <input type="email" name="email" id="email" />
            <label>Phone</label>
            <input type="number" name="phone" id="phone" />
            <label>Message</label>
            <textarea name="message" id="message" />
            <input type="submit" value="Send" />
        </form>
    </div>;
};

export default ModalBuy;
