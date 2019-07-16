import styled from 'styled-components';

import Container from '../../utils/components/Container';
import Text from '../../utils/components/Text';

import { Column } from '../../utils/components/Grid';

import bgImage from '../../assets/bgImage.png';

export const MainContainer = styled(Container)`
    height: 100vh;
    align-items: center;
    background: #fff;
`;


export const Wrapper = styled(Container)`
    background-color: rgba(255,255, 255, 0);
    width: 100%;
    justifyContent: center;
    text-align: center;

    @media only screen and (min-width: 500px) {
        width: 90%;
    }
    @media only screen and (min-width: 768px) {
        width: 70%;
    }
`;

export const SignUpButton = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: bolder;
    font-size: 2em;
    text-align: center;
    text-transform: uppercase;
    background-image: linear-gradient(to bottom right, #E03BFB, #6831DE);
    color: #fff;
    margin-bottom: 1rem;
    padding: 1rem 4rem;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
    cursor: pointer;
    transition: transform .5s ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 6px 4px rgba(0,0,0,0.25);
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 4rem;
        padding: 1rem 5rem;
    }
`;

export const StyledColumn = styled(Column)`
    margin: 1rem;

    @media only screen and (min-width: 1200px) {
        margin: 0;
    }
`;

export const StyledText = styled(Text)`
    font-family: 'Poppins', sans-serif;
`;

export const Title = styled(StyledText)`
    padding: 1rem;
`;

export const Paragraph = styled(StyledText)`
    padding: 0 2rem;

`;

export const StyledContainer = styled(Container)`
    background: #fff;
    @media only screen and (min-width: 1200px) {
        background: url(${bgImage});
        background-repeat: no-repeat;
        background-position: center;
    }
`;