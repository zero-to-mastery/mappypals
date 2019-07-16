import React from 'react';

import Text from '../../utils/components/Text';

import { Row, Column } from '../../utils/components/Grid';

import {
    Circle,
    Card
} from './home-card.styles';

export const HomeCard = ({ number, title, icon, text, ...otherProps}) => {

    const fontSize = otherProps.textSize ? otherProps.textSize : 1;

    return (
        <Card>
            <Row alignItems="center" >
                <Column xs={3} alignItems="center" >
                    <Circle>
                        { number }
                    </Circle>
                </Column>
                <Column xs={7} alignItems="center">
                    <Text
                        color="#6831DE"
                        family="Poppins"
                        size={fontSize * 120}
                    >
                        { title }
                    </Text>
                </Column>
            </Row>
               
            <Row>
                <Column xs={12} alignItems="center">
                    <img alt='card-logo' src={icon}/>
                </Column>
               
            </Row>
                
            <Row 
                alignItems="center" 
                justifyContent="center"
            >
                <Column xs={6} alignItems="center">
                    <Text
                        color="#555555"
                        align="center"
                        family="Poppins"
                    >
                        { text }
                    </Text>
                    
                </Column>
            </Row>
        </Card>
    )
}

export default HomeCard;