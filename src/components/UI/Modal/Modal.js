import React from 'react';
import classes from './Modal.module.scss';
export const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show
        ? `${classes.modal} ${classes.displayBlock}`
        : `${classes.modal} ${classes.displayNone}`;

    return (
        <div className={showHideClassName}>
            <section className={classes.modalMain}>
                <button className={classes.closeButton} onClick={handleClose}>
                    X
                </button>
                {children}
            </section>
        </div>
    );
};

export default Modal;
