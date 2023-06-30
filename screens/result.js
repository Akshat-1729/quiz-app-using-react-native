import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View>
      <View>
      <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
      <Image source={require('../assets/quiz.jpg')}
      style={styles.banner}
      resizeMode='contain'
      />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

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