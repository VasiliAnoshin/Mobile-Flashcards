import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'

class Decks extends Component {
    render() {
    console.log('inside Decks')
    console.log(this.props.decks)
    return (
      <View>
        <Text>This is Decks !!!!</Text>
      </View>
    );
  }
}

const mapStateToProps = (decks) =>{
  console.log('inside maptoprops')
  return {
      decks
  };
}

export default connect(mapStateToProps)(Decks)
