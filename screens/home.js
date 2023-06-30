import { StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View>
      <Title/>
      <View style={styles.bannerContainer}>
      <Image source={require('../assets/quiz.jpg')}
      style={styles.banner}
      resizeMode='contain'
      />
      </View>

      {/* anything in TouchableOpacity will be touchable */}
      {/* easier to design than button */}
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')}>
        <Text>Start</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  banner:{
    width:300,
    height:300,
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center'

  }
})