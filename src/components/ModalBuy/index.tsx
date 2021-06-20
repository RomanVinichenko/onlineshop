import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-number-input';

import styles from './style.module.scss';

interface IModalBuyProps {
    greetingUser?: string;
}

const ModalBuy: FC<IModalBuyProps> = ({ greetingUser }) => {
    const [value, setValue] = useState('');
    const [textareaValue, setTextareaValue] = useState(greetingUser);

    const textareaValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(e.currentTarget.value);
    };

    const [buttonText, setButtonText] = useState('Отправить заявку');

    function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const element = e.target as HTMLFormElement;

        emailjs
            .sendForm('service_zwzcuj8', 'template_nnofpol', element, 'user_lMzDOCxB7FMfmgkx2Qr4C')
            .then();

        element.reset();
        setTextareaValue('');
        setButtonText('Сообщение отправлено');
        setValue('');
        setTimeout(function () {
            setButtonText('Отправить заявку');
        }, 3000);
        // TODO: CLOSE
    }

    return (
        <form className={styles['contact-form']} onSubmit={sendEmail}>
            <input
                className={styles['contact-form__name']}
                type="text"
                name="name"
                id="name"
                placeholder="Ваше имя"
                required
            />
            <PhoneInput
                className={styles['contact-form__phone']}
                placeholder="Ваш телефон"
                international
                defaultCountry="UA"
                value={value}
                onChange={setValue}
                name="phone"
                id="phone"
                required
            />
            <textarea
                className={styles['contact-form__text']}
                name="message"
                id="message"
                value={textareaValue}
                onChange={textareaValueHandler}
            />
            <input className={styles['contact-form__btn']} type="submit" value={buttonText} />
        </form>
    );
};

export default ModalBuy;
