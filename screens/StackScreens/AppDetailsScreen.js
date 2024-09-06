import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AppDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the App Details Screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginColor: 'red',
    borderWidth: 10,
    borderColor: 'red',
  },
});