import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
      <StatusBar/>
     
      <Text style={{color:'white',fontSize:23,fontWeight:'bold'}}>Recently Played</Text>
      <Ionicons name="settings-outline" size={24} color="white" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:50
},
})
