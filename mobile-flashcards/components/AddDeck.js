import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform , TextInput } from 'react-native'
import {blue, red , white, orange} from '../utils/colors'

class AddDecks extends Component {
    render() {
    console.log('inside AddDecks')
    btnClick = () => {
        console.log('inside Btn DO NOTHING !!!!')
    }
    return (
      <View style ={styles.container} >
        <View>
            <Text style = {styles.title}>Add new Deck title </Text>
         </View>
         <View> 
             <TextInput
                        // style={styles.textInput}
                        // onChangeText={(title) => this.setState({title})}
                        // value={this.state.title}
                        placeholder='Add new Deck Title'
                        // placeholderTextColor='#ccc'
                        />
            <TouchableOpacity
                        style={styles.btn}
                        onPress={this.btnClick}>
                     <Text style={{color: white}}>Submit</Text>
            </TouchableOpacity>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
},
title: {
    fontSize: 30,
    color: blue,
    alignItems: 'center',
},
btn: {
    alignItems: 'center',
    backgroundColor: red,
    padding: 15,
    marginTop: 20,
    height: 45,
    borderRadius: 2,
},

})

export default AddDecks