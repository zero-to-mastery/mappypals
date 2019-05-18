    
import React from 'react'
import Layout from '../../components/Layout'
import team from './team-data'
import TeamCard from './TeamCard';
import styled from 'styled-components'; 

const AboutPageLayout = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  margin: 5vh 0;
` 

const TeamCardGrid =  styled.div` 
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

// const WhoWeAre = styled.div`
//   display: block;
//   font-size: 27px;
//   text-align: center;
//   width: 80vw;
//   height: 10rem;
//   padding: 20px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 50px;
// `

const About = () => {
  return (
    <Layout>
      <AboutPageLayout>
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
      </AboutPageLayout>
    </Layout>
  )
}

export default About;