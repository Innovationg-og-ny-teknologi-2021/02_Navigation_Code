import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen';
import UserProfileScreen from '../screens/StackScreens/UserProfileScreen';
import AppDetailsScreen from '../screens/StackScreens/AppDetailsScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Details Screen">
      <Stack.Screen name="Details Screen" component={DetailsScreen} />
      <Stack.Screen name="User Profile" component={UserProfileScreen} />
      <Stack.Screen name="App Details" component={AppDetailsScreen} />
    </Stack.Navigator>
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
