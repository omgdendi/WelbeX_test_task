import React from 'react';
import styles from "./Dialog.module.scss";

const Dialog = (props) => {

    const hideDialog = (e) => {
        if (e.target === e.currentTarget) {
            props.setShow(false);
        }
    }

    return (
        <div className={styles.dialog} onClick={(e) => hideDialog(e)}>
            <div className={styles.dialog__content}>
                <span>Hello world</span>
            </div>
        </div>
    );
};

export default Dialog;