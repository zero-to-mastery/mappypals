import styled from 'styled-components';
import Container from '../UI/Container/Container';

export const Circle = styled.div`
    height: 30px;
    width: 30px;
    color: #fff;
    background-color: #6831de;
    border-radius: 100%;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-size: 120%;
`;

export const Card = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 405px;
    width: 285px;
    background-color: #fff;
    border: 1px solid #6831de;
    border-radius: 15px;
    box-shadow: 0 8px 6px -6px black;
`;
