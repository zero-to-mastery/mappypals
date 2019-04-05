import React from 'react'
import Layout from '../../components/Layout'
import team from './team-data'
import TeamCard from './TeamCard';
import styled from 'styled-components'; 

const AboutPageLayout = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  margin-top: 5vh;
`

const TeamCardGrid =  styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 20px;
  margin-left: auto;
  margin-right: auto;
`

const WhoWeAre = styled.div`
  display: block;
  font-size: 27px;
  text-align: center;
  width: 80vw;
  height: 10rem;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`

const About = () => {
  return (
    <Layout>
      <AboutPageLayout>
        <WhoWeAre>
          <h2>Who We Are</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium exercitationem earum, accusamus magnam dignissimos vero suscipit fugit, ad ea impedit. Consequatur quasi veritatis modi eos quia dolorum ut distinctio?</p>
        </WhoWeAre>
        <TeamCardGrid>
          {team.map((data, id) => {
            return(
              <TeamCard key={id} 
                id={id}
                name={data.name}
                role= {data.role}
                location={data.location}
                isEmployed={data.isEmployed}
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

