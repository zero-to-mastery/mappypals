import React from 'react';
import './Home.css';

class AddFriendForm extends React.Component {
    constructor() {
        super();
        this.state = { data: {} };
    }
    anythingChanges = event => {
        this.setState({
            data: { ...this.state.data, [event.target.id]: event.target.value }
        });
    };
    render() {
        return (
            <div id="add-new">
                <div id="close-btn" onClick={this.props.closeForm}>
                    <span>X</span>
                </div>
                <input
                    type="text"
                    onChange={this.anythingChanges}
                    placeholder="Nickname"
                    id="nickname"
                    required
                />
                <input
                    type="email"
                    onChange={this.anythingChanges}
                    placeholder="Email address"
                    id="email"
                    required
                />
                <input
                    type="text"
                    onChange={this.anythingChanges}
                    placeholder="Full Namer"
                    id="name"
                />
                <input
                    type="tel"
                    onChange={this.anythingChanges}
                    placeholder="Phone Number"
                    id="phone"
                />
                <input
                    type="button"
                    value="Add Friend"
                    id="add"
                    onClick={() => {
                        this.props.onFriendLoaded(this.state);
                    }}
                />
            </div>
        );
    }
}

export default AddFriendForm;
