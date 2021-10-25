import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Row from './Row'

const ItemRow = ({title,item}) => {
  const renderItem=({item,index})=>{
    return(
      <View >
        <Row item={item} index={index}/>
      </View>
    )
  }
  return (
    <View  >
      <Text style={{color:'white',fontSize:23,fontWeight:'bold',marginTop:38}}>{title}</Text>
      <FlatList
      data={item}
      keyExtractor={(item)=>item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      />
    </View>
  )
}

export default ItemRow

const styles = StyleSheet.create({})
