import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:20,color:"black"}}>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})