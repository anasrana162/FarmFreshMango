import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity, ScrollView,Dimensions } from 'react-native'
import React, { Component } from 'react'
import { signupCSS } from './singupCSS';
import * as colors from "../../../constants/colors"
import LinearGradient from 'react-native-linear-gradient';
import AuthHeaders from '../../../components/authHeaders';
import CustomTextinp from '../../../components/customTextinp';
import CustomButton from '../../../components/customButton';
import Links from '../../../components/links';
const width = Dimensions.get('window').width

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    navigateToLogin() {
        this.props.navigation.navigate("Login")
    }
    handleOnScroll(event) {
        //calculate screenIndex by contentOffset and screen width
        console.log('currentScreenIndex', parseInt(event.nativeEvent.contentOffset.x / Dimensions.get('window').width));
    }
    render() {
        return (
            <View style={signupCSS.main_view}>
                <ScrollView contentContainerStyle={signupCSS.scrollView_cont}>

                    {/* ---------Header--------- */}
                    <AuthHeaders style={{ height: 240 }} />

                    {/* ---------Title--------- */}
                    <Text style={signupCSS.title}>SignUp</Text>

                    {/* ---------Textinp--------- */}

                    <ScrollView
                        contentContainerStyle={signupCSS.txtinp_Scrollview_cont}
                        horizontal={true}
                        pagingEnabled={true}
                        onScroll={(e) => this.handleOnScroll(e)}
                    >

                        <View style={{ flexDirection: "column", marginLeft: 30 }}>

                            {/*----First Name textinp---- */}
                            <CustomTextinp
                                customStyle={{ marginTop: 30, }}
                                placeholder={"first name"}
                                placeholderTextColor={colors.placeholderTextColor}
                            />
                            {/*----Last Name textinp---- */}
                            <CustomTextinp
                                customStyle={{ marginTop: 20, }}
                                placeholder={"last name"}
                                placeholderTextColor={colors.placeholderTextColor}
                            />
                        </View>


                        <View style={{ flexDirection: "column", marginHorizontal: 60 }}>
                            {/*---Contact NumberLast Name textinp---- */}
                            <CustomTextinp
                                customStyle={{ marginTop: 30, }}
                                placeholder={"Contact Number"}
                                placeholderTextColor={colors.placeholderTextColor}
                            />

                            {/*----Email textinp---- */}
                            <CustomTextinp
                                customStyle={{ marginTop: 20, }}
                                placeholder={"Email"}
                                placeholderTextColor={colors.placeholderTextColor}
                            />
                        </View>

                        <View style={{ flexDirection: "column", marginRight: 30 }}>
                            {/*----Password textinp---- */}
                            <CustomTextinp
                                customStyle={{ marginTop: 30, }}
                                placeholder={"Password"}
                                placeholderTextColor={colors.placeholderTextColor}
                            />

                            {/*---- Confirm Password textinp---- */}
                            <CustomTextinp
                                customStyle={{ marginTop: 20, }}
                                placeholder={"Confirm Password"}
                                placeholderTextColor={colors.placeholderTextColor}
                            />

                        </View>

                    </ScrollView>

                    {/*--------- Register Button--------- */}
                    <CustomButton
                        activeOpacity={0.5}
                        onPress={() => { }}
                        textBtn="Register"
                        loader={false}
                    />

                    <Links
                        onPress={() => this.navigateToLogin()}
                        linkText={"Already a member?"}
                        style={{ marginBottom: 70 }}
                    />
                </ScrollView>
            </View >
        )
    }
}
export default Signup;
const styles = StyleSheet.create({})