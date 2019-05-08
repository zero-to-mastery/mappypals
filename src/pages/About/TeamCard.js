import React from 'react'
import styled from 'styled-components'
import './About.css';

const Card = styled.div` 
  background-color: white;
  text-align: center;
  width: 250px; 
  height: auto;
  padding: 10px;
  border-style: solid;
  border-width: 0.5px;
  border-color: lightgrey;
  border-radius: 7.5px;
  box-shadow: 1.5px 2.5px 0px -3px #DCDCDC;
`

const TeamCard = ({ id, name, role, location, portfolio, linkedin }) => (
  <React.Fragment>
    <Card>
      <div className="user-photo">
        <img src={`https://robohash.org/${id}?size=200x200`} alt="Team Avatars"/>
      </div>
      <h3 className="dev-name">{name}</h3>
      <h4>{role}</h4>
      <h6>{location}</h6>
      <div className="user-links">
        <div className='portfolio' >
          <a href={portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>
        <div className='portfolio' >
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>  
      </div>
    </Card>
  </React.Fragment>
)

export default TeamCard;