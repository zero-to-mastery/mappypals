import React from 'react';
import styled from 'styled-components';
import './FriendsList.css';
import Button from '../../components/UI/Button/Button';

const Card = styled.div`
    background-color: white;
    text-align: center;
    width: 150px;
    height: 215px;
    margin: 1em;
    padding: 15px;
    border: 0.5px solid #cccccc;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #989898;
    color: #6831de;
    transition: all 0.4s ease-in-out;
    &:hover {
        transform: scale(1.03);
    }
    @media (max-width: 493px) {
        width: 110px;
        margin: 1em auto;
    }
`;
const FriendCard = ({ name }) => (
    <React.Fragment>
        <Card>
            <div className="friend-photo">
                <img
                    src={`https://robohash.org/${name}?size=200x200`}
                    alt="Friend Avatars"
                />
            </div>
            <h3 className="friendsText">{name}</h3>

            <Button btnType="FriendList">
                <i className="far fa-user" />
                <p className="friendsText">Profile</p>
            </Button>
            <Button btnType="FriendList">
                <i className="far fa-comment-dots" />
                <p className="friendsText">Message</p>
            </Button>
        </Card>
    </React.Fragment>
);

export default FriendCard;
