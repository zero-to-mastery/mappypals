import React, { Component } from 'react';
import Form from '../../Login/Form';
import classes from './InviteFriends.module.css';
class InviteFriends extends Component {
    render() {
        return (
            <div className={classes.container}>
                <Form onSubmit={this.handleSubmit} className={classes.form}>
                    <h2 className={classes.title}>
                        Send an invite to multiple friends
                    </h2>
                </Form>
            </div>
        );
    }
}

export default InviteFriends;
