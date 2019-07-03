import React from 'react';
import './InvitationSent.css';
import Form from '../../Login/Form';
import XButton from '../../../components/UI/XButton/XButton';
import Button from '../../../components/UI/Button/Button';

const InvitationSent = ({ InvitationForm, hideInvitationForm }) => {
    const hideForm = event => {
        event.preventDefault();
        hideInvitationForm();
    };

    return (
        <div style={{ display: InvitationForm ? 'block' : 'none' }}>
            <Form className="main">
                <XButton btnType="InvitationSent" onClick={hideForm}>
                    X
                </XButton>
                <h5 className="titleInvite">Great! You've send an invite</h5>
                <div className="btnContainer">
                    <Button btnType="YouSendAnInvite" onClick={hideForm}>
                        GO BACK
                    </Button>
                    <Button btnType="YouSendAnInvite" onClick={hideForm}>
                        SEND MORE
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default InvitationSent;
