import React from 'react'
import team from './team-data'
import TeamCard from './TeamCard';
import styled from 'styled-components';

const TeamCardGrid =  styled.div` 
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 6em;
  grid-row-gap: 4em;

  @media screen and (max-width: 600px) {
    grid-template-columns: auto auto;
    grid-column-gap: 1em;
    grid-row-gap: 2em;

  }
`

const About = () => {
  return (
    <div className="aboutpage">
      <TeamCardGrid>
        {team.map((data, id) => {
          return( 
            <TeamCard key={id} 
              id={id}
              name={data.name}
              role= {data.role}
              location={data.location}
              isEmployed={data.isEmployed}
              portfolio={data.portfolio}
              linkedin={data.linkedin}
            /> 
          )
          }
        )}
      </TeamCardGrid>
    </div>
  )
}

export default About;