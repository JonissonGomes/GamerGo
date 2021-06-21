import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { stylesheet } from './styles';

import iconDiscord from '../../images/icons/iconDiscord.png';

interface IButtonProps {
    title: string
}

export function Button({title} : IButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={stylesheet.button}>
            <View style={stylesheet.boxIcon}>
                <Image source={iconDiscord} style={stylesheet.icon} />
            </View>

            <View style={stylesheet.boxText}>
                <Text style={stylesheet.textButton}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
