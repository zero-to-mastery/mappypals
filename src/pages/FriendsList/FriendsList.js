import React from 'react';
import friends from './friends-data';
import FriendCard from './FriendCard';
import SearchFriends from './SearchFriends';
import styled from 'styled-components';

const FriendsLayout = styled.div`
    width: calc(100vw - 300px);
    background: #fff;
    @media (max-width: 774px) {
        width: 100%;
    }
`;

const FriendsPageList = styled.div`
    margin-top: 3em;
    display: grid;
    grid-template-rows: auto auto;
`;
const FriendsTopBar = styled.div`
    width: 95%;
    margin: auto;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    @media (max-width: 774px) {
        height: 20vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const FriendCardGrid = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  @media (max-width: 493px) {
    width: 100%;
  }
`;

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: friends
        };
    }

    handleChange = e => {
        let currentList = friends;
        let newList = [];

        if (e.target.value !== '') {
            newList = currentList.filter(item => {
                const lc = item.name.toLowerCase();

                const filter = e.target.value.toLowerCase();

                return lc.includes(filter);
            });
        } else {
            newList = friends;
        }

        this.setState({
            friends: newList
        });
    };

    render() {
        return (
            <FriendsLayout>
                <FriendsTopBar>
                    <h1 className="friendsText">Friends</h1>
                    <SearchFriends onChange={this.handleChange} />
                </FriendsTopBar>
                <FriendsPageList>
                    <FriendCardGrid>
                        {this.state.friends.map((item, id) => {
                            return <FriendCard key={id} name={item.name} />;
                        })}
                    </FriendCardGrid>
                </FriendsPageList>
            </FriendsLayout>
        );
    }
}
export default FriendsList;
