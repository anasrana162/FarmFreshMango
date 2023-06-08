import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import * as colors from '../constants/colors'
import { ComponentCSS } from './styles/componentStyles';
export default function CustomButton({ customStyle, onPress, disabled, activeOpacity, textBtn, loader }) {
    console.log("textBtn", textBtn)
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[colors?.gradient1, colors?.gradient2, colors.gradient3]}
            style={[ComponentCSS.btn_gradient_view, customStyle]}
        >
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                style={ComponentCSS.btn_style_view}
                activeOpacity={activeOpacity}
            >
                {loader == true && <ActivityIndicator size={"large"} color={colors.primary} />}
                {loader == false && < Text style={ComponentCSS.btn_text_style}>{textBtn}</Text>}
            </TouchableOpacity>
        </LinearGradient >
    )
}

const styles = StyleSheet.create({})