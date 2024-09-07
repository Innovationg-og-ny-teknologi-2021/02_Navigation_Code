// npm i @react-navigation/stack @react-navigation/bottom-tabs 
// npm i react-native-vector-icons
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import StackNavigation from './components/StackComponent';

import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({color, size}) => {
            let iconName;

            if(route.name === 'Home'){
              iconName = 'home'
            }else if(route.name === 'Details'){
              iconName = 'list'
            }else if(route.name === 'Settings'){
              iconName = 'settings'
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          }
        })}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={StackNavigation} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
