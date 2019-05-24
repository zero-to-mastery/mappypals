import React from 'react';
import '../Home.css';
import '../../Login/Login.css';
import Form from '../../Login/Form';
import './AddFriendForm.css';

class AddFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: ''
        };
    }
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();

        this.props.onFriendLoaded(this.state);

        this.setState({
            firstName: '',
            lastname: '',
            email: ''
        });
    };

    render() {
        return (
            <div
                id="add-new"
                className="Login no-bg u-pb"
                style={{ display: this.props.formDisplay ? 'block' : 'none' }}
            >
                <Form onSubmit={this.handleSubmit}>
                    <button
                        className="X-buttonAddFriend"
                        onClick={this.props.InviteFormX}
                    >
                        X
                    </button>
                    <h5 className="AddFriendsTitle">
                        Add a friend by sending an invite
                    </h5>
                    <div className="nameContainer">
                        <label className="item1" htmlFor="firstname">
                            Firstname
                            <input
                                type="text"
                                name="firstname"
                                className="item2"
                                onChange={this.onChange}
                                required
                                value={this.state.firstName}
                            />
                        </label>
                        <label className="item3" htmlFor="lastname">
                            Lastname
                            <input
                                type="text"
                                name="lastname"
                                className="item4"
                                onChange={this.onChange}
                                required
                                value={this.state.lastname}
                            />
                        </label>
                    </div>
                    <label htmlFor="email">
                        Email
                        <input
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            required
                            value={this.state.email}
                        />
                    </label>
                    <div className="btnContainer">
                        <button
                            type="submit"
                            onClick={this.props.removeDraggablePin}
                        >
                            Send Invite
                        </button>
                    </div>
                </Form>
            </div>
        );
    }
}
export default AddFriendForm;
