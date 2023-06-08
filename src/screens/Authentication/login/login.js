import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { loginCSS } from './loginCSS';
import * as colors from "../../../constants/colors"
import LinearGradient from 'react-native-linear-gradient';
import AuthHeaders from '../../../components/authHeaders';
import CustomTextinp from '../../../components/customTextinp';
import CustomButton from '../../../components/customButton';
import Links from '../../../components/links';
import { connect } from 'react-redux';
import * as userActions from '../../../redux/actions/user';
import * as userDataActions from '../../../redux/actions/user_data';
import { bindActionCreators } from 'redux';
import * as functions from '../../../api/function';
import { FaEye } from 'react-icons/fa'
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailFlag: false,
            passwordFlag: false,
            activityLoader: false,

        }
    }

    navigateToSignup() {
        this.props.navigation.navigate("Signup")
    }
    navigateToChangePassword() {
        this.props.navigation.navigate("ChangePassword")
    }
    onChangeEmail = async (text) => {
        return (
            setImmediate(() => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) {

                    this.setState({ emailFlag: false, email: text })
                } else {
                    this.setState({ emailFlag: true })
                }

            })
        )
    }

    onChangePassword = async (text) => {
        return (
            setImmediate(() => {
                if (text.length > 5) {

                    this.setState({ passwordFlag: false, password: text })
                } else {

                    this.setState({ passwordFlag: true })
                }
            })
        )
    }

    login() {
        this.setState({ activityLoader: true });
        const { email, password, emailFlag, passwordFlag } = this.state;



        if (passwordFlag == false || emailFlag == false) {
            functions.login(email, password)
                .then((res) => {
                    if (res.data.success.token) {
                        this.setState({ activityLoader: false });
                        var { actions } = this.props
                        actions.userToken(res.data.success.token)

                        this.props.navigation.navigate("Home")
                    }

                })
                .catch((err) => {
                    this.setState({ activityLoader: false });
                    console.log("error", err.response);
                })
        } else {
            alert(" conditions false");
            this.setState({ activityLoader: false });
        }

    }

    render() {
        return (
                <View style={loginCSS.main_view}>
                    <ScrollView contentContainerStyle={loginCSS.scrollView_cont} >

                        {/* ---------Header--------- */}
                        <AuthHeaders />

                        {/* ---------Title--------- */}
                        <Text style={loginCSS.title}>Signin</Text>

                        {/* ---------Textinp--------- */}

                        {/*----Email textinp---- */}
                        <CustomTextinp
                            customStyle={{ marginTop: 30, }}
                            placeholder={"Email"}
                            placeholderTextColor={colors.placeholderTextColor}
                            onChangeText={(text) => this.onChangeEmail(text)}
                        />
                        {console.log("Icon Vale", FaEye)}
                        {/*----Password textinp---- */}
                        < CustomTextinp
                            placeholder={"Password"}
                            placeholderTextColor={colors.placeholderTextColor}
                            onChangeText={(text) => this.onChangePassword(text)}
                            Icon={FaEye}
                        />

                        {/*--------- Login Button--------- */}
                        < CustomButton
                            activeOpacity={0.5}
                            onPress={() => this.login()}
                            textBtn="Login"
                            loader={this.state.activityLoader}
                        />

                        <Links
                            onPress={() => this.navigateToSignup()}
                            linkText={"Create Account"}
                        />

                        <Links
                            onPress={() => this.navigateToChangePassword()}
                            linkText={"Change Password"}
                            style={{ marginTop: -5 }}
                        />

                    </ScrollView>
                </View>
            
        )
    }
}
const styles = StyleSheet.create({})
const mapStateToProps = state => ({
    token: state.token,
    user_data: state.user_data,
});

const ActionCreators = Object.assign(
    {},
    userActions,
    userDataActions
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)