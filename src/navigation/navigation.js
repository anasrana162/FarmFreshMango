import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/*---------------Screen Components Imports---------------*/
import Login from '../screens/Authentication/login/login';
import Signup from '../screens/Authentication/signup/signup';
import ChangePassword from '../screens/Authentication/change_password/changePassword';
import Home from '../screens/Dash/home';

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Login'
                    screenOptions={{
                        headerShown: false,
                        animation:'fade_from_bottom',
                        
                    }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="ChangePassword" component={ChangePassword} />
                    <Stack.Screen name="Home" component={Home} />

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})