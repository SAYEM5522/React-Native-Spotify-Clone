import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Song from './Song'

const SongHeader = ({route}) => {
  const AnimatedFlatlist=Animated.createAnimatedComponent(FlatList);
  const translateY=useSharedValue(0);
  const onscroll=useAnimatedScrollHandler((event) => {
    translateY.value = event.contentOffset.y;
  });
  const renderItem=()=>{
    return(
      <View>
        <Song item={route.params.item} translateY={translateY}/>
      </View>
    )
  }
  const data=[{
    id:''
  }]
  return (
   <AnimatedFlatlist
   data={data}
   keyExtractor={(item)=>item.id}
   renderItem={renderItem}
   showsVerticalScrollIndicator={false}
   onscroll={onscroll}
   scrollEventThrottle={16}

   />
  )
}

export default SongHeader

const styles = StyleSheet.create({})
