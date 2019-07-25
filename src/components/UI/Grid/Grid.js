import React from 'react';
import styled from 'styled-components';

export const RowStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;

    ${({ flexDirection }) =>
        flexDirection && `flex-direction: ${flexDirection};`}
    ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
    ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
    ${({ justifyContent }) =>
        justifyContent && `justify-content: ${justifyContent};`}    
    ${({ height }) => height && `height: ${height}vh`}
    
`;

const getWidthString = span => {
    if (!span) return;

    let width = (span / 12) * 100;
    return `width: ${width}%`;
};

export const ColumnStyle = styled.div`
    display: flex;
    flex-direction: column;
    ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
    ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
    ${({ justifyContent }) =>
        justifyContent && `justify-content: ${justifyContent};`}
    
    ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

    @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }

    @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidthString(md)};
    }

    @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthString(lg)};
    }
`;

export function Row({ children, ...otherProps }) {
    return <RowStyle {...otherProps}> {children} </RowStyle>;
}

export function Column({ children, ...otherProps }) {
    return <ColumnStyle {...otherProps}> {children} </ColumnStyle>;
}
