import React from 'react';
import PropTypes from 'prop-types';
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

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};
export default Modal;
