import React from 'react';
import '../Home.css';
import '../../Login/Login.css';
import Form from '../../Login/Form';
import './AddFriendForm.css';
import Button from '../../../components/UI/Button/Button';
import XButton from '../../../components/UI/XButton/XButton';

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
                style={{ display: this.props.formDisplay ? 'flex' : 'none' }}
            >
                <Form onSubmit={this.handleSubmit}>
                    <XButton
                        btnType="AddFriendForm"
                        onClick={this.props.InviteFormX}
                    >
                        X
                    </XButton>
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
                        <Button
                            btnType="Submit"
                            type="submit"
                            onClick={this.props.removeDraggablePin}
                        >
                            Send Invite
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}
export default AddFriendForm;
