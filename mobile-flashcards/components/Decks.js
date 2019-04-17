import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import {handleInitialeDecks} from '../actions/shared'

class Decks extends Component {
    
    componentDidMount(){
      // console.log(this.props)
      this.props.dispatch(handleInitialeDecks())
      // console.log('after props dispatch')
      // console.log(this.props.decks.length)
    }
    
    render() {
    console.log('inside Decks')
    return (
      <View>
        <Text>This is Decks !!!!</Text>
      </View>
    );
  }
}

const mapStateToProps = (state ) =>{
  console.log('inside maptoprops')
  console.log(state)
  return {
      decks: state.decks
  };
}

export default connect(mapStateToProps)(Decks)
