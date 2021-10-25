import React from 'react'
import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Recent = () => {
  const renderItem=({item})=>{
    return(
      <View style={{paddingRight:15,marginTop:20,alignItems:'flex-start',}}>
        <TouchableOpacity activeOpacity={0.7}>
        <Image
        source={{uri:item.img}}
        style={{width:130,height:130,resizeMode:'cover'}}
        />
        </TouchableOpacity>
        <Text numberOfLines={1} style={{color:'white',marginTop:3,fontWeight:'bold',width:130}}>{item.name}</Text>
     
      </View>
    )
  }
  const data=[{
    id:'1',
    img:'https://i.scdn.co/image/ab67616d0000b273ebc8cfac8b586bc475b04918',
    name:'Born To Die',
  },
  {
    id:'2',
    img:'https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f',
    name:'Lana Dellary',
  },
  {
    id:'3',
    img:'https://images.unsplash.com/photo-1556126286-e4e2508d0b40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3RpZnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name:'Lana Dellary',
  },  {
    id:'4',
    img:'https://images.unsplash.com/photo-1598628340858-201fe3c2cb7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNwb3RpZnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name:'Lana Dellary',
  },  {
    id:'5',
    img:'https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f',
    name:'Lana Dellary',
  }]
  return (
    <View style={{position:'absolute',top:100,left:15}}>
     <FlatList
     data={data}
     keyExtractor={(item)=>item.id}
     renderItem={renderItem}
     horizontal
     showsHorizontalScrollIndicator={false}
     />
    </View>
  )
}

export default Recent

const styles = StyleSheet.create({})
