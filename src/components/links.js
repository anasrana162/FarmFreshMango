import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ComponentCSS } from './styles/componentStyles';
import * as colors from '../constants/colors'
const Links = ({ linkText, style, onPress }) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={[ComponentCSS.linkBtn_view,style]}>
            <Text style={ComponentCSS.linkBtn_text}>{linkText}</Text>
        </TouchableOpacity>
    )
}

export default Links;

const styles = StyleSheet.create({})