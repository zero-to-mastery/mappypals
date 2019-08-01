import styled from 'styled-components';

import Container from '../../components/UI/Container/Container';
import Text from '../../components/UI/Text/Text';

import { Column } from '../../components/UI/Grid/Grid';

export const MainContainer = styled(Container)`
    height: 100vh;
    align-items: center;
    background: #fff;
`;

export const Wrapper = styled(Container)`
    background-color: rgba(255, 255, 255, 0);
    width: 100%;
    justifycontent: center;
    text-align: center;

    @media only screen and (min-width: 500px) {
        width: 90%;
    }
    @media only screen and (min-width: 768px) {
        width: 80%;
    }
    @media only screen and (min-width: 1200px) {
        width: 800px;
    }
`;

export const ImgWrapper = styled(Container)`
    background: #fff;
    position: relative;
    width: 100%;
`;

export const SignUpButton = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: bolder;
    font-size: 2em;
    text-align: center;
    text-transform: uppercase;
    background-image: linear-gradient(to bottom right, #e03bfb, #6831de);
    color: #fff;
    margin-bottom: 1rem;
    padding: 1rem 4rem;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 25%;
        padding: 0.8rem 5rem;
    }

    @media only screen and (max-width: 370px) {
        height: 2rem;
        font-size: 1.2rem;
        margin-top: 20%;
        
        
    }

    @media only screen and (min-width: 370px) {
        height: 1.7rem;
        font-size: 1.2rem;
        margin-top: 18%;
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
    margin-bottom: 0;

    @media only screen and (min-width: 1200px) {
        margin-top: 0;
    }
`;

export const Paragraph = styled(StyledText)`
    padding: 0 1rem;

    @media only screen and (min-width: 1200px) {
        margin-top: 0;
    }
`;

export const StyledContainer = styled(Container)`
    background: rgba(255, 255, 255, 0);
    @media only screen and (min-width: 1200px) {
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;
