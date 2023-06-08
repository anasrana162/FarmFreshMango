import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { ComponentCSS } from './styles/componentStyles';
import LinearGradient from 'react-native-linear-gradient';
import * as colors from '../constants/colors'

const AuthHeaders = ({style,imageStyle}) => {

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[colors?.gradient1, colors?.gradient2, colors.gradient3]} style={[ComponentCSS.gradient_view_header,style]}>
            <Image
                source={require("../assets/Farm-Fresh-logo.png")}
                style={imageStyle}
            />
        </LinearGradient>
    )

}
export default AuthHeaders
const styles = StyleSheet.create({})