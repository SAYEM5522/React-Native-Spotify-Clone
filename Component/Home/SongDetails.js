import React from 'react'
import { Image, StyleSheet, Text, View ,useWindowDimensions, FlatList} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectSong } from '../../features/songSlice';
import {items} from "./Track"
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const SongDetails = ({route}) => {
  const height=useWindowDimensions().height;
  const width=useWindowDimensions().width;
  const [value,setValue]=useState(0);
  const [play ,setPlay]=useState(false)
  const song=useSelector(selectSong)
  const translateX=useSharedValue(0);
  const AnimatedFlatList=Animated.createAnimatedComponent(FlatList);
  const onscroll=useAnimatedScrollHandler({
    onScroll:(event)=>{
        translateX.value=event.contentOffset.x
        
    }
  })
 
  const Item=({item,index})=>{
  
     
    const style=useAnimatedStyle(()=>{ 
      return{
       transform:[{
       translateX:withTiming(0,{duration:-1000})
  }]
      }
    })
   
    return(
      <View style={{marginHorizontal:25,alignItems:'center'}}> 
      <Animated.Image 
        source={{uri:(song.song.id== index)?(song.song.img):(item.img)}}
        style={[{width:width-50,height:height/2+10,alignSelf:'center'},style]}
        />
      </View>
    )
  }
 
 
  return (
    <View>
        <LinearGradient
       colors={["whitesmoke","#000"]}
       style={[StyleSheet.absoluteFillObject,{height:height}]}
       />
     <View style={styles.header}>
     
     <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
     <Text>Daily Mix 1</Text>
     <Entypo name="dots-three-vertical" size={22} color="black" />
     </View>
     
      
        <AnimatedFlatList
        data={items}
        keyExtractor={(item)=>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=><Item item={item} index={index} />}
        snapToAlignment="center"
        snapToInterval={width}
        decelerationRate="fast"
        onScroll={onscroll}
        scrollEventThrottle={16}
        />
     

     <View style={{marginLeft:25,marginVertical:10,}}>
     <Text style={{fontSize:24,fontWeight:'bold',color:'lightgray'}}>{song.song.name}</Text>
     <Text style={{fontSize:15,fontWeight:'200',color:'lightgray'}} >{song.song.singer}</Text>
     </View>
     <Slider
          style={{width: width-50, height: 40,alignSelf:'center'}}
          minimumValue={0}
          maximumValue={3.5}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(e)=>setValue(e)}
        
  />
      <View style={{flexDirection:'row',marginLeft:15,justifyContent:'space-evenly',marginVertical:10,alignItems:'center'}}>
      <AntDesign name="hearto" size={24} color="white" style={{marginRight:20}} />
      <AntDesign name="stepbackward" size={27} color="white" />
      {
        play?<AntDesign name="pause" onPress={()=>setPlay(false)} style={styles.play} size={28} color="black" />
        :<MaterialIcons name="play-arrow" onPress={()=>setPlay(true)} size={28} color="black" style={styles.play} />
      }
      <AntDesign name="stepforward" size={27} color="white" />
      <AntDesign name="minuscircleo" size={24} color="white" />
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:25}}>
      <MaterialCommunityIcons name="desktop-tower-monitor" size={23} color="white" style={{marginLeft:15}} />
      <MaterialCommunityIcons name="format-list-bulleted-square" size={23} color="lightgray" style={{marginRight:30}} />
      </View>
    </View>
  )
}

export default SongDetails

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:15
  },
  play:{
    alignSelf:"center",
    padding:15,
    backgroundColor:'#fff',
    borderRadius:35,
  }
})
