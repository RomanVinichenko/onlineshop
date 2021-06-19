import React, { FC } from 'react';

import styles from './style.module.scss';

interface IModalProps {
    callBack: () => void;
}

const Modal: FC<IModalProps> = ({ children, callBack }) => {
    return (
        <div className={styles['modal']}>
            <div className={styles['modal__content']}>
                <div className={styles['modal__box']}>
                    {children}
                    <button className={styles['modal__close']} onClick={callBack}>
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
