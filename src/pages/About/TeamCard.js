import React from 'react';
import styled from 'styled-components';
import './About.css';

const Card = styled.div`
  background-color: pink;
  text-align: center;
  width: 250px;
  height: 400px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px lightgrey;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const TeamCard = ({ id, name, role, location, isEmployed }) => (
  <React.Fragment>
    <Card>
      <div className="user-photo">
        <img
          src={`https://robohash.org/${id}?size=200x200`}
          alt="Team Avatars"
        />
      </div>
      <h2>{name}</h2>
      <h3>{role}</h3>
      <h4>{location}</h4>
      <h4>Employed: {isEmployed}</h4>
    </Card>
  </React.Fragment>
);

export default TeamCard;
