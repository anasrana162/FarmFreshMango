import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { ChangePassCSS } from './changePasswordCSS';
import * as colors from "../../../constants/colors"
import LinearGradient from 'react-native-linear-gradient';
import AuthHeaders from '../../../components/authHeaders';
import CustomTextinp from '../../../components/customTextinp';
import CustomButton from '../../../components/customButton';
import Links from '../../../components/links';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    navigateToLogin() {
        this.props.navigation.navigate("Login")
    }
    render() {
        return (
            <View style={ChangePassCSS.main_view}>

                {/* ---------Header--------- */}
                <AuthHeaders />

                {/* ---------Title--------- */}
                <Text style={ChangePassCSS.title}>Change Password</Text>

                {/* ---------Textinp--------- */}


                {/*----Email textinp---- */}
                <CustomTextinp
                    customStyle={{ marginTop: 30, }}
                    placeholder={"Email"}
                    placeholderTextColor={colors.placeholderTextColor}
                />



                {/*--------- Change Password Button--------- */}
                <CustomButton
                    activeOpacity={1}
                    onPress={() => { }}
                    textBtn="Change Password"
                />

                <Links
                    onPress={() => this.navigateToLogin()}
                    linkText={"Do you want tp Signin?"}
                    style={{ marginBottom: 70 }}
                />


            </View>
        )
    }
}
export default ChangePassword;
const styles = StyleSheet.create({})