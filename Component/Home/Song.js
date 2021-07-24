import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Track from './Track';
import Animated, { Extrapolate, interpolate,   useAnimatedStyle, useSharedValue,interpolateColor, withSpring, withTiming  } from 'react-native-reanimated';
// import  {  interpolateColors } from 'react-native-reanimated'
// import {interpolateColors} from 'react-native-redash'

import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");



const Song = ({item,translateY}) => {
  const navigation=useNavigation();
  const input=[0,150]
  const output=[1,0.8]
  const color=["white","black"]
  
const style=useAnimatedStyle(()=>{
  return{
    transform:[{
      scale:interpolate(translateY.value,input,output,Extrapolate.CLAMP)
    },
    {
      translateY:interpolate(translateY.value,input,[0,100],Extrapolate.CLAMP)
    }
  ],
  opacity:interpolate(translateY.value,[0,150],[1,0],Extrapolate.CLAMP)
  }
})
const scrollItem=useAnimatedStyle(()=>{
  return{
    transform:[{
      translateY:interpolate(translateY.value,[0,50],[-0,-20])
    }],
  }
})

const text=useAnimatedStyle(()=>{
  return{
    opacity:interpolate(translateY.value,[0,20],[0,1],Extrapolate.CLAMP)
  }
})
const Title=useAnimatedStyle(()=>{
  return{
    transform:[  {
      translateY:interpolate(translateY.value,input,[0,100])
    }]
  }
})
const backgroundOpacity=useAnimatedStyle(()=>{
  return{
    backgroundColor:withTiming(translateY.value>130?"black":"white",{duration:135})
  }
})
  return (
    <View style={{backgroundColor:'#fff',flex:1}}>
      <Animated.View style={backgroundOpacity} >
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.98)']}
        style={styles.background}/>
      <View style={[{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:15}]}>
      <AntDesign name="arrowleft" size={24} color="black" onPress={()=>navigation.navigate("Home")}/>
                        <Animated.Text style={[{fontSize:17,fontWeight:'bold',color:'black',marginLeft:25},text]}>{item.name}</Animated.Text>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <AntDesign name="hearto" size={24} color="black" style={{marginRight:20}} />
      <Entypo name="dots-three-vertical" size={24} color="black" style={{marginRight:10}} />
      </View>
      </View>
      <View style={[,{alignItems:'center',top:20,marginBottom:20}]}>
       <View >
                    <Animated.Image
                    source={{uri:item.img}}
                    style={[styles.image,style]}
                    />
       </View>
                    <Animated.View style={[{alignItems:'center',color:'white',zIndex:1},Title]}>
                    <Text style={{fontSize:25,fontWeight:'bold',color:'white',zIndex:100}}>{item.name}</Text>
                    <Text style={{color:'white',zIndex:100,width:180,marginBottom:30,marginLeft:20}}>BY SPOTIFY . 3.9 M LIKES</Text>
                    </Animated.View>
     
   
      </View>
      </Animated.View>
      <View style={[{backgroundColor:'rgba(0,0,0,0.98)',flex:1}]}>
                <Animated.View style={[scrollItem,{zIndex:1,backgroundColor:'rgba(0,0,0,0.98)'}]}>
                    <MaterialIcons name="play-arrow" size={24} color="white" style={{alignSelf:"center",padding:20,backgroundColor:'#1DB954',borderRadius:35,top:-30}} />
                    <Track/>
                </Animated.View>
      
      </View>
    </View>
  )
}

export default Song

const styles = StyleSheet.create({
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 365,
},
image:{
  width: 200,
  height: 200,
  zIndex:100,
  alignSelf:'center'
},


})
