import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    ${({ row }) => row && `flex-direction: row;`}
    ${({ justifyContent }) =>
        `justify-content: ${justifyContent ? justifyContent : `flex-start`};`}
    ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
    ${({ wrap }) => `flex-wrap: ${wrap ? wrap : `nowrap`};`}
    ${({ center }) => center && `justify-content: center; align-items: center;`}
    ${({ height }) => height && `height: ${height}vh`}
    ${({ width }) => width && `width: ${width}vw`}
    ${({ width }) => width && `width: ${width}vw`}
    ${({ bgColor }) => `background: ${bgColor ? bgColor : `#000`};`}
    ${({ color }) => `color: ${color ? color : `#fff`};`}
`;

export const Container = ({ ...otherProps }) => (
    <ContainerStyle {...otherProps} />
);

export default Container;
