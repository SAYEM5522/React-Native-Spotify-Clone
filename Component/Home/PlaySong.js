import React from 'react'
import { StyleSheet, Text, View,useWindowDimensions, Image, TouchableWithoutFeedback } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectSong } from '../../features/songSlice';
const PlaySong = () => {
  const song=useSelector(selectSong)
  const height=useWindowDimensions().height;
  const navigation=useNavigation();
  return (
    <>
    <TouchableWithoutFeedback onPress={()=>navigation.navigate("SongDetails")}>
    <View style={{position:'absolute',bottom:48,left:0,right:0,backgroundColor:'#2c2c2c',zIndex:1,height:67,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}  >
          <Image
          style={{height:67,width:67,resizeMode:'cover'}}
          source={{uri:'https://i.scdn.co/image/ab67616d0000b273ebc8cfac8b586bc475b04918'}}
          />
          <View style={{flex:1,marginLeft:20}}>
        
          <Text style={{color:'white',fontSize:14,fontWeight:'bold'}}>Born to Die</Text>
          <Text style={{color:'lightgray'}}>Pritam</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <AntDesign name="hearto" size={24} color="white" style={{marginRight:20}} />
         <MaterialIcons name="play-arrow" size={29} color="white" style={{marginRight:20}}  />
          </View>
      
    </View>
    </TouchableWithoutFeedback>
    </>
  )
}

export default PlaySong

const styles = StyleSheet.create({})
