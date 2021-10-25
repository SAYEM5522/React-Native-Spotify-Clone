import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PinchGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
const Row = ({item,index}) => {
  const pressed=useSharedValue(false);
  const navigation=useNavigation();
  const onGestureEvent=useAnimatedGestureHandler({
    onStart:(event,ctx)=>{
      pressed.value=true
    },

    onEnd:(event,ctx)=>{
      pressed.value=false
    }
  })
  const style=useAnimatedStyle(()=>{
    return{
      transform:[
        {
          scale:withSpring(pressed.value?0.9:0.95)
        }
      ],
      opacity:pressed.value?0.6:1
    }
  })  
  
  return (
    // <TapGestureHandler onGestureEvent={onGestureEvent}>
   
    <Animated.View style={[{marginRight:15,marginTop:15,alignItems:'flex-start'},]} 
      
      >
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={()=>navigation.navigate("SongHeader",{item})}
        
        >

        <Image
      source={{uri:item.img}}
      style={{width:160,height:175,resizeMode:'cover'}}
      />
      <Text style={{color:'gray'}}>{item.name}</Text>

        </TouchableOpacity>
     
    
    </Animated.View>
      // </TapGestureHandler>

  )
}

export default Row

const styles = StyleSheet.create({})
