import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './Screen/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SongHeader from './Component/Home/SongHeader';
import SongDetails from './Component/Home/SongDetails';
import store from './app/store';
import { Provider } from 'react-redux';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
       headerMode='none'
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
       
        name="SongHeader" component={SongHeader} />
        <Stack.Screen name="SongDetails" component={SongDetails}/>

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
