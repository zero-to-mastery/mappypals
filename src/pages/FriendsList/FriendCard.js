import React from 'react'
import styled from 'styled-components'
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
  color: #6831DE;
  transition: all .4s ease-in-out;    
  &:hover {
    transform: scale(1.03); 
  }
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(to bottom right, #CF48FF 30%, #6831DE);
  color: white;
  width: 80%;
  height: 25px;
  margin: 0.4em auto;
  border: none;
  padding: 0.25em 1em;
  border-radius: 7px;
`;

const FriendCard = ({ name }) => (<React.Fragment>
    <Card>
        <div className="friend-photo">
            <img src={`https://robohash.org/${name}?size=200x200`} alt="Friend Avatars" />
        </div>
        <h3>{name}</h3>
        <Button>
         <i className="far fa-user"></i><p>Profile</p>
        </Button>
        <Button>
         <i className="far fa-comment-dots"></i><p>Message</p>
        </Button>
    </Card>
</React.Fragment>)

export default FriendCard;