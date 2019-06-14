import React, { Component } from 'react';
import Form from '../../Login/Form';
import classes from './InviteFriends.module.css';
import ErrorMessages from '../../../components/ErrorMessages/ErrorMessages';
import DisplayInvites from './DisplayInvites/DisplayInvites';

class InviteFriends extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Invites: [],
            email: '',
            ErrorEmptyInput: false,
            DisplayErrorDublicate: false
        };
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.storeInvites();
        this.resetEmail();
    };
    storeInvites = () => {
        const { email, Invites } = this.state;
        const dublicateEmail = Invites.find(Invite => Invite === email);

        if (this.state.email === '') {
            this.displayErrorEmptyInput();
            this.hideErrorEmptyInput();
            return false;
        } else if (dublicateEmail) {
            this.displayErrorDublicate();
            this.hideErrorEmptyInput();
            return false;
        } else {
            this.hideErrorEmptyInput();
            this.hideErrorDublicate();
            this.setState({
                Invites: [...this.state.Invites, this.state.email]
            });
        }
    };
    removeInvite = data => {
        const { Invites } = this.state;
        const InvitesToKeep = Invites.filter(invite => invite !== data);
        if (InvitesToKeep.length < Invites.length) {
            this.setState({ Invites: InvitesToKeep });
        }
    };
    resetEmail = () => this.setState({ email: '' });
    displayErrorEmptyInput = () => this.setState({ ErrorEmptyInput: true });
    hideErrorEmptyInput = () => this.setState({ ErrorEmptyInput: false });

    displayErrorDublicate = () =>
        this.setState({ DisplayErrorDublicate: true });
    hideErrorDublicate = () => this.setState({ DisplayErrorDublicate: false });

    render() {
        const { ErrorEmptyInput, DisplayErrorDublicate } = this.state;
        let ErrorMessageVar = '';
        if (ErrorEmptyInput) {
            ErrorMessageVar = <ErrorMessages content="Input is empty" />;
        }
        let ErrorDublicate = '';
        if (DisplayErrorDublicate) {
            ErrorDublicate = <ErrorMessages content="Dublicate email" />;
        }

        return (
            <div className={classes.container}>
                <Form onSubmit={this.handleSubmit} className={classes.form}>
                    <h2 className={classes.title}>
                        Send an invite to multiple friends {ErrorMessageVar}{' '}
                        {ErrorDublicate}
                    </h2>
                    <label htmlFor="email" className={classes.label}>
                        Email
                    </label>
                    <input
                        name="email"
                        value={this.state.email}
                        className={classes.input}
                        onChange={this.handleChange}
                        type="email"
                    />
                    <button className={classes.submit}>Send Invites</button>
                    {this.state.Invites.map((data, index) => {
                        return (
                            <DisplayInvites
                                key={index}
                                data={data}
                                removeInvite={() => this.removeInvite(data)}
                            />
                        );
                    })}
                </Form>
            </div>
        );
    }
}

export default InviteFriends;
