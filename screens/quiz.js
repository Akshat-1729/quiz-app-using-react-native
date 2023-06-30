import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'

const Quiz = () => {
  useEffect{()=>{
    
  }}
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.questiontext}>Who is top scorrer in football</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionbutton}>
        <Text style={styles.optiontext}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionbutton}>
        <Text style={styles.optiontext}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionbutton}>
        <Text style={styles.optiontext}>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionbutton}>
        <Text style={styles.optiontext}>Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.Bottombuttons}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Bottombuttons}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingTop:40,
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
  },
  Bottombuttons:{
    backgroundColor:'#219ebc',
    width:100,
    alignItems:'center',
    padding:15,
    borderRadius:20
  },
  buttonText:{
    fontSize:16,
    fontWeight:'700',
    color:'#edede9'
  },
  questiontext:{
    fontSize:28,
    fontWeight:'600',
    
  },
  optionbutton:{
    padding:10,
    marginVertical:7,
    backgroundColor:'#ffb703',
    borderRadius:9
  },
  optiontext:{
    fontSize:16,
    fontWeight:'600',
    color:'#023047'
  }
})