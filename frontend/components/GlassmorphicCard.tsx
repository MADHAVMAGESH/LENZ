import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const GlassmorphicCard = (props) => {
    return (
        <Animatable.View animation="fadeInUp" duration={500} style={props.style}>
            {props.children}
        </Animatable.View>
    );
};

export default GlassmorphicCard;