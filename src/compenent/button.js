import React from 'react'
import {Text, TouchableOpacity } from 'react-native'

Button = ({PressCallback,text}) =>{
  const {ButtonStyle, TextStyle }=styles
  return (
    <TouchableOpacity style ={ButtonStyle} onPress={PressCallback}>
  <Text style={TextStyle}>{text}</Text>
  </TouchableOpacity>
  )

}
const styles = {
  TextStyle:{
    fontSize:16,
    color:'#007aff',
    alignSelf:'center',
    paddingTop:5,
    paddingBottom:5,
    fontWeight:'600'
  },
  ButtonStyle:{
    marginLeft:2,
    marginRight:2,
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderWidth:2,
    borderColor:'#007aff',
    borderRadius:5
  }

}

export default Button
