import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => {
  return (
    <View style ={{ height:350,width:"100%"}}>
         <LinearGradient
         colors={['#144380','#191414', "transparent",]}
          start={{
            x:0.6,y:0
          }}
          end={{
            x:1,y:0.9
          }}
        style={styles.Background}/>
        <StatusBar/>
      <View style={styles.background}>
      <Text style={{color:'white',fontSize:23,fontWeight:'bold'}}>Recently Played</Text>
      <Ionicons name="settings-outline" size={24} color="white" />
    </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  background:{
    // position: 'absolute',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingTop:20
    // marginTop:50
},
Background:{
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height:350,
  width:"100%",
  // zIndex:100
},
})
