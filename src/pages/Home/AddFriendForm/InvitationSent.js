import React from 'react';
import './InvitationSent.css';
import Form from '../../Login/Form';

const InvitationSent = ({ InvitationForm, hideInvitationForm }) => {
    const hideForm = event => {
        event.preventDefault();
        hideInvitationForm();
    };

    return (
        <div style={{ display: InvitationForm ? 'block' : 'none' }}>
            <Form className="main">
                <button className="X-button" onClick={hideForm}>
                    X
                </button>
                <h5 className="titleInvite">Great! You've send an invite</h5>
                <div className="btnContainer">
                    <button className="u-mr u-mb" onClick={hideForm}>
                        GO BACK
                    </button>
                    <button onClick={hideForm}>SEND MORE</button>
                </div>
            </Form>
        </div>
    );
};

export default InvitationSent;
