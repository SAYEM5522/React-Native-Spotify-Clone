import React from 'react'
import { StyleSheet, Text, View ,TouchableWithoutFeedback} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './BottomScreen/Home';
import Search from './BottomScreen/Search';
import Library from './BottomScreen/Library';
import Premimum from './BottomScreen/Premimum';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import PlaySong from '../Component/Home/PlaySong';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
    <PlaySong/>
    <Tab.Navigator 
    tabBarOptions={{
      style:{
        backgroundColor:'#2c2c2c',
        // elevation:5,
        borderTopWidth:1,
        borderTopColor:'black'
      },
     labelStyle:{
      //  borderTopWidth:0,
       color:'white',
       fontSize:12
     }
    }}
    >
    <Tab.Screen
    options={{
      tabBarIcon:({focused})=>{
        return(
     <Foundation name="home" size={24} color={focused?"white":'lightgray'} />
        )
      }
    }}
    name="Home" component={Home} />
    <Tab.Screen 
    options={{
      tabBarIcon:({focused})=>{
        return(
          <AntDesign name="search1" size={24} color={focused?"white":'lightgray'} />
        )
      }
    }}
    name="Search" component={Search} />
    <Tab.Screen
    options={{
      tabBarIcon:({focused})=>{
        return(
          <Ionicons name="ios-library-outline" size={24} color={focused?"white":'lightgray'} />
        )
      }
    }}
    name="Library" component={Library} />
    <Tab.Screen 
    options={{
      tabBarIcon:({focused})=>{
        return(
          <Entypo name="spotify" size={24} color={focused?"white":'lightgray'} />
        )
      }
    }}
    name="Premimum" component={Premimum} />

  </Tab.Navigator>
  </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
