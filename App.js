import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation/navigation';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ width: width, height: height }}>
        <Navigation />
      </SafeAreaView>
    )
  }
}
export default App;
const styles = StyleSheet.create({})
