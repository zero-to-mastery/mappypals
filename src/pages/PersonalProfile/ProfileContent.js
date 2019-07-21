import React from 'react';
import XButton from '../../components/UI/XButton/XButton';
import styled from 'styled-components';
import './ProfileContent.css';
import USER_DATA from './USER_DATA';

const ProfileContentWrapper = styled.div`
    width: 60%;
    height: 100%;
    flex-direction: column;
    margin: 0 1rem;
    padding: 0 2rem;
`;

const Content = styled.div`
    width: 100%;
    min-height: 50%;
`;

const Interests = styled.div`
    width: 100%;
    height: 30%;
`;

const ProfileContent = () => (
    <ProfileContentWrapper>
        <Content>
            <h2 className="text-large">About me</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                voluptatibus ex corporis deserunt. Consequuntur rem consectetur
                non iusto, atque quos nesciunt eaque quisquam error, quibusdam
                impedit, at ratione maiores eum!Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Atque voluptatibus ex corporis
                deserunt. Consequuntur rem consectetur non iusto, atque quos
                nesciunt eaque quisquam error, quibusdam impedit, at ratione
                maiores eum!Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Atque voluptatibus ex corporis deserunt. Consequuntur rem
                consectetur non iusto, atque quos nesciunt eaque quisquam error,
                quibusdam impedit, at ratione maiores eum!
            </p>
        </Content>
        <Interests>
            <h2 className="text-interests">Interests</h2>
            {USER_DATA[0].interests.map(interest => (
                <XButton btnType="DisplayInterests">{interest}</XButton>
            ))}
        </Interests>
    </ProfileContentWrapper>
);

export default ProfileContent;
