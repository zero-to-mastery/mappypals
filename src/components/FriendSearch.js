import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DropDown, SearchStyles } from './SearchBar';

/* This is a modification of https://alligator.io/react/react-autocomplete/ */
/* Downshift via the defaultContainer did not seem to work*/
/* It has a container to make it viewable over maps*/
/* styled-components are used to style it*/
/* search friends by country OR by interests */

const defaultContainer = ({ children }) => (
    <div className="search-engine">{children}</div>
);

class FriendSearch extends Component {
    static propTypes = {
        friends: PropTypes.instanceOf(Array)
    };

    static defaultProps = {
        friends: []
    };

    constructor(props) {
        super(props);

        this.state = {
            // The active selection's index
            activeFriend: 0,
            // The Friends that match the user's input
            filteredFriends: [],
            // Whether or not the Friend list is shown
            showFriends: false,
            // What the user has entered
            userInput: '',
            //initialized filter
            filterType: 'country'
        };
    }

    // Event fired when the input value is changed
    onChange = e => {
        const { friends } = this.props;
        const { filteredFriends, filterType } = this.state;
        const userInput = e.currentTarget.value;
        // Filter our Friends that don't contain the user's input
        switch (filterType) {
            case 'country':
                filteredFriends.push(
                    friends.filter(
                        friend =>
                            friend.country
                                .toLowerCase()
                                .indexOf(userInput.toLowerCase()) > -1
                    )
                );
                break;
            // How are we storing interests? We will need a parser here.
            case 'interests':
                filteredFriends.push(
                    friends.filter(
                        friend =>
                            friend.interests
                                .toLowerCase()
                                .indexOf(userInput.toLowerCase()) > -1
                    )
                );
                break;
            default:
                console.log(`Other filters not implemented`);
        }

        // Update the user input and filtered Friends, reset the active
        // Friend and make sure the Friends are shown
        this.setState({
            activeFriend: 0,
            filteredFriends,
            showFriends: true,
            userInput: e.currentTarget.value
        });
    }; //end onChange

    // Event fired when the user clicks on a Friend
    onClick = e => {
        // Update the user input and reset the rest of the state
        this.setState({
            activeFriend: 0,
            filteredFriends: [],
            showFriends: false,
            userInput: e.currentTarget.innerText
        });
    }; //end onClick

    // Event fired when the user presses a key down
    onKeyDown = e => {
        const { activeFriend, filteredFriends } = this.state;

        // User pressed the enter key, update the input and close the
        // Friends
        switch (e.keyCode) {
            case 13:
                this.setState({
                    activeFriend: 0,
                    showFriends: false,
                    userInput: filteredFriends[activeFriend]
                });
                break;
            // User pressed the up arrow, decrement the index
            case 38:
                if (activeFriend === 0) {
                    return;
                }
                this.setState({ activeFriend: activeFriend - 1 });
                break;
            // User pressed the down arrow, increment the index
            case 40:
                if (activeFriend - 1 === filteredFriends.length) {
                    return;
                }
                this.setState({ activeFriend: activeFriend + 1 });
                break;
            default:
                return;
        }
    }; //end onKeyDown

    render() {
        const Container = this.props.containerComponent || defaultContainer;
        const {
            onChange,
            onClick,
            onKeyDown,
            state: { activeFriend, filteredFriends, showFriends, userInput }
        } = this;

        let FriendsListComponent;

        if (showFriends && userInput) {
            if (filteredFriends[0].length > 1) {
                FriendsListComponent = (
                    <ul className="friends">
                        {filteredFriends.map((friend, index) => {
                            let className;
                            let first = String(friend[index].firstname);
                            // Flag the active Friend with a class
                            if (index === activeFriend) {
                                className = 'friend-active';
                            } else {
                                className = 'friend';
                            }
                            return (
                                <li
                                    className={className}
                                    key={friend[index].id}
                                    onClick={onClick}
                                >
                                    <img
                                        width="50"
                                        src={`https://robohash.org/${index}?size=50x50`}
                                        alt={
                                            first.substr(-1) === 's'
                                                ? `${first}' photo`
                                                : `${first}'s photo`
                                        }
                                    />
                                    {`${first} ${friend[index].lastname}`}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else if (filteredFriends[0].length === 1) {
                let friend = filteredFriends[0];
                FriendsListComponent = (
                    <ul className="friends">
                        <li
                            className={'friend-active'}
                            key={friend.id}
                            onClick={onClick}
                        >
                            <img
                                width="50"
                                src={`https://robohash.org/${
                                    friend.id
                                }?size=50x50`}
                                alt={
                                    friend.firstname.substr(-1) === 's'
                                        ? `${friend.firstname}' photo`
                                        : `${friend.firstname}'s photo`
                                }
                            />

                            {`${friend.firstname} ${friend.lastname}`}
                        </li>
                    </ul>
                );
            } else {
                //link invite form
                FriendsListComponent = (
                    <div className="no-friends">
                        <em>No Friends, you're on your own! Send an invite</em>
                    </div>
                );
            }
        }

        return (
            <Container>
                <SearchStyles>
                    <Fragment>
                        <DropDown>
                            <select onChange={this.onMenuSelect}>
                                <option value="country">Country</option>
                                <option value="interests">Interests</option>
                                <option value="other interests">
                                    Other Filters
                                </option>
                            </select>
                            <input
                                type="text"
                                placeholder="Search For A Friend"
                                aria-label="Search for a friend by country or by interests."
                                onChange={onChange}
                                onKeyDown={onKeyDown}
                                value={userInput}
                            />

                            {FriendsListComponent}
                        </DropDown>
                    </Fragment>
                </SearchStyles>
            </Container>
        );
    }
}

export default FriendSearch;
