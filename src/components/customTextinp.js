import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as colors from '../constants/colors'
import { ComponentCSS } from './styles/componentStyles';



const customTextinp = ({ customStyle, onChangeText, placeholder, placeholderTextColor, textinpStyle, Icon }) => {
    console.log("Icon",Icon);
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[colors?.gradient1, colors?.gradient2, colors.gradient3]}
            style={[ComponentCSS.gradient_view_textinp, customStyle]}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                style={[ComponentCSS.textinp_view, textinpStyle]}
            />
          
            {/* <Icon/> */}
        </LinearGradient>
    )
}
export default customTextinp;

const styles = StyleSheet.create({})