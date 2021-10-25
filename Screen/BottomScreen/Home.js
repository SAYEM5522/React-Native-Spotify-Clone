import React from 'react'
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import Header from '../../Component/Home/Header'
import ItemRow from '../../Component/Home/ItemRow'
import PlaySong from '../../Component/Home/PlaySong';
import Recent from '../../Component/Home/Recent';

const Home = () => {
  const data=[{
    id:'1'
  }]
  const items=[{
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
  const renderItem=()=>{
    return(
      <View >
      
      <Header/>
      <Recent/>
      <View style={{marginTop:-95,marginLeft:15}}>
      <ItemRow title="What's your mood" item={items.map((item)=>item)}/>
      <ItemRow title="Try something else" item={items.map((item)=>item)}/>
      <ItemRow title="Throwback" item={items.map((item)=>item)}/>
      <ItemRow title="Today's biggest hits" item={items.map((item)=>item)}/>
      <ItemRow title="To get you started" item={items.map((item)=>item)}/>
      <ItemRow title="To get you started" item={items.map((item)=>item)}/>
      </View>
      </View>
    )
  }
  return (
    <View style={{backgroundColor:'#191414',flex:1}}>
      <StatusBar/>
     <FlatList
     data={data}
     renderItem={renderItem}
     keyExtractor={(item)=>item.id}
     />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
