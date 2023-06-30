import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text>Who is top scorrer in football</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
        <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text>Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container:{
    padding:12,
    height:'100%',
  },
  question:{
    marginVertical:16
  },
  options:{
    marginVertical:16,
    flex:1
  },
  buttons:{
    marginBottom:12,
    flexDirection:'row',
    justifyContent:'space-between'
  }
})