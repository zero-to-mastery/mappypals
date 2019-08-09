import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Map from './Map';
import { useSelector } from 'react-redux';
import {
    MainContainer,
    Wrapper,
    Title,
    ImgWrapper,
    Paragraph,
    StyledContainer,
    StyledColumn,
    SignUpButton
} from './Home.style.js';

import './Home.css';

import SignUpIcon from '../../assets/SignUpIcon.png';
import InviteIcon from '../../assets/InviteIcon.png';
import ConnectIcon from '../../assets/ConnectIcon.png';
import { ReactComponent as EarthIcon } from '../../assets/svg/bgEarth.svg';

import { Row, Column } from '../../components/UI/Grid/Grid';
import HomeCard from '../../components/HomeCard/home-card.component.js';

import useWindowSize from '../../components/UI/effects/useWindowSize.effect';

const Home = () => {
    const size = useWindowSize();
    // react-redux hooks
    const loggedIn = useSelector(state => state.user.uid !== undefined);
    // react hooks
    const [fontSize, setFontSize] = useState(1);

    useEffect(() => {
        const width = size.width;

        if (width >= 1900) {
            setFontSize(2);
        } else if (width >= 1200) {
            setFontSize(1.3);
        } else if (width >= 768) {
            setFontSize(1.2);
        } else if (width >= 500) {
            setFontSize(1.1);
        } else {
            setFontSize(1);
        }
    }, [size]);

    return loggedIn ? (
        <section>
            <Map />
        </section>
    ) : (
        <MainContainer>
            <Wrapper>
                <Title color="#6831DE" weight="bold" size={150 * fontSize}>
                    How MappyPals works
                </Title>
                <Paragraph size={100 * fontSize} weight="500" align="center">
                    MappyPals is an exciting new app that can keep you up to
                    date with your international friends. You can follow them,
                    message them, make new friends and see what they are up to!
                    All in one easy-to-use app!
                </Paragraph>
            </Wrapper>
            {size.width >= 1200 ? (
                <ImgWrapper center>
                    <EarthIcon />
                    <TheThreeSteps />
                </ImgWrapper>
            ) : (
                <TheThreeSteps />
            )}
        </MainContainer>
    );
};

function TheThreeSteps() {
    return (
        <StyledContainer
            column
            alignItems="center"
            justifyContent="space-between"
            style={{ width: '100%' }}
        >
            <Row
                style={{ width: '100%' }}
                alignItems="center"
                justifyContent="space-around"
            >
                <StyledColumn xs={12} lg={4} alignItems="center">
                    <HomeCard
                        number={1}
                        title={'Sign Up'}
                        icon={SignUpIcon}
                        text={`Sign up for MappyPals to gain access to all features`}
                    />
                </StyledColumn>
                <StyledColumn xs={12} lg={4} alignItems="center">
                    <HomeCard
                        number={2}
                        title={'Invite Friends'}
                        icon={InviteIcon}
                        text={`Invite your friends from all over the world`}
                    />
                </StyledColumn>
                <StyledColumn xs={12} lg={4} alignItems="center">
                    <HomeCard
                        number={3}
                        title={'Connect'}
                        icon={ConnectIcon}
                        text={`Connect with your friends. See where they are, message them and more!`}
                    />
                </StyledColumn>
            </Row>

            <Row
                alignItems="center"
                justifyContent="center"
                style={{ width: '100%' }}
            >
                <Column xs={10} sm={8} lg={6} alignItems="center">
                    <Link to="/signup">
                        <SignUpButton>Sign Up!</SignUpButton>
                    </Link>
                </Column>
            </Row>
        </StyledContainer>
    );
}

export default Home;
