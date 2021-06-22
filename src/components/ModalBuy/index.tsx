import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-number-input';

import styles from './style.module.scss';

interface IModalBuyProps {
    greetingUser?: string;
    closeModal?: () => void;
}

const ModalBuy: FC<IModalBuyProps> = ({ greetingUser, closeModal }) => {
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
            closeModal && closeModal();
        }, 3000);
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

            <div className={styles['contact-form__category-inner']}>
                <select
                    className={styles['contact-form__category']}
                    id="category"
                    name="category"
                    required>
                    <option value="Полотенца" selected>
                        Полотенца
                    </option>
                    <option value="Постельное белье">Постельное белье</option>
                </select>
            </div>
            <div className={styles['contact-form__counter']}>
                <button className={styles['contact-form__counter-btn']} type={'button'}>-</button>
                <input
                       className={styles['contact-form__counter-input']}
                       placeholder="1"
                />
                <button className={styles['contact-form__counter-btn']} type={'button'}>
                    +
                </button>
            </div>
            <textarea
                className={styles['contact-form__text']}
                placeholder="Введите ваше сообщение"
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
