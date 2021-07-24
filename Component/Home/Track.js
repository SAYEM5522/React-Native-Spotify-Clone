import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setSong } from '../../features/songSlice';
export const items=[{
  id:'1',
  img:'https://i.scdn.co/image/ab67616d0000b273ebc8cfac8b586bc475b04918',
  name:'Born To Die',
  singer:'Arijit Sing'
},
{
  id:'2',
  img:'https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f',
  name:'Lana Dellary',
  singer:'Darshan Raval'
},
{
  id:'3',
  img:'https://images.unsplash.com/photo-1556126286-e4e2508d0b40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3RpZnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  name:'Lana Dellary',
  singer:'Pritam'
},  {
  id:'4',
  img:'https://images.unsplash.com/photo-1598628340858-201fe3c2cb7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNwb3RpZnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  name:'Lana Dellary',
  singer:'Arijit Sing'
},  {
  id:'5',
  img:'https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f',
  name:'Lana Dellary',
  singer:'Arijit Sing'
},
{
  id:'6',
  img:'https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f',
  name:'Lana Dellary',
  singer:'Arijit Sing'
},
{
  id:'7',
  img:'https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f',
  name:'Lana Dellary',
  singer:'Arijit Sing'
},
{
  id:'8',
  img:'https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f',
  name:'Lana Dellary',
  singer:'Arijit Sing'
}]
const Track = () => {
  const navigation=useNavigation();
const dispitch=useDispatch();
 
  return (
    <View >
     {
       items.map((item,index)=>{
       
         return(
          <View key ={index}style={[{marginVertical:5,flexDirection:'row',
          alignItems:'center',justifyContent:'space-between',padding:10}]} >
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate("SongDetails",{item:item}) 
            dispitch(setSong({
              song:item
            }))
            }}>

            <Image
            source={{uri:item.img}}
            style={{width:50,height:50,resizeMode:'cover',}}
            />
            </TouchableWithoutFeedback>

            <View style={{flex:1,marginLeft:20}}>
              <Text style={{color:'white'}}>{item.name}</Text>
              <Text style={{color:'white'}}>{item.singer}</Text>
            </View>
            <Entypo name="dots-three-vertical" size={17} color="white" style={{marginRight:10}} />
          </View>
         )
       })
     }

    </View>
  )
}

export default Track

const styles = StyleSheet.create({})
