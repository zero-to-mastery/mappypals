import React from 'react';
import styled from 'styled-components';
import './FriendsList.css';

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

const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-image: linear-gradient(to bottom right, #cf48ff 30%, #6831de);
    color: white;
    width: 80%;
    height: 25px;
    margin: 0.4em auto;
    border: none;
    padding: 0.25em 1em;
    border-radius: 7px;
    &:hover {
        cursor: pointer;
        background-image: linear-gradient(to top left, #cf48ff 30%, #6831de);
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
            <Button>
                <i className="far fa-user" />
                <p className="friendsText">Profile</p>
            </Button>
            <Button>
                <i className="far fa-comment-dots" />
                <p className="friendsText">Message</p>
            </Button>
        </Card>
    </React.Fragment>
);

export default FriendCard;
