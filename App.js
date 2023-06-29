import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import home from './screens/home'

export default function App() {
  return (
    <View style={styles.container}>
      <home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
