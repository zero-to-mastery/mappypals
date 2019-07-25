import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Modal.module.scss';
import { hideInviteFriends } from '../../../store/actions/modals';

export const Modal = ({ show, children }) => {
    const showHideClassName = show
        ? `${classes.modal} ${classes.displayBlock}`
        : `${classes.modal} ${classes.displayNone}`;
    // react-redux hook
    const dispatch = useDispatch();
    return (
        <div className={showHideClassName}>
            <section className={classes.header}>
                <button
                    className={classes.closeButton}
                    onClick={() => dispatch(hideInviteFriends())}
                >
                    X
                </button>
            </section>
            <section className={classes.modalMain}>{children}</section>
        </div>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired
};
export default Modal;
