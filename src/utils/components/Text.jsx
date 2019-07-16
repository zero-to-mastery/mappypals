import React from 'react';
import styled, {css} from 'styled-components';

const textStyle = css`
    ${({align}) => align && `text-align: ${align};`}
    ${({size}) => size && `font-size: ${size}%;`}
    ${({spacing}) => spacing && `letter-spacing: ${spacing}em;`}
    ${({color}) => `color: ${color ? color : `#000`};`}
    ${({padding}) => padding && `padding: ${padding}rem;`}
    ${({weight}) => weight && `font-weight: ${weight};`}
    ${({uppercase}) => uppercase && `text-transform: uppercase;`}
    ${({family}) => family && `font-family: ${family}, sans-serif;` }
`;

export const Text = ({children, variant, ...otherProps}) => {
    const Element = variant ? styled(variant)`${textStyle}` : styled.p`${textStyle}`;

    return <Element {...otherProps}>{children}</Element>
}

export default Text;