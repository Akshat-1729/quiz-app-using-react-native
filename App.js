import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
 

export default function App() {
  return (
    <View style={styles.container}>
       {/* <Home/> */}
       {/* <Title/> */}
       {/* <Quiz/> */}
       <Result/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:16,
  }
});
