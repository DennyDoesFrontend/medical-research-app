import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

function CaptureButton({ style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <MaterialCommunityIcons name='camera' size={35} color='white' />
    </TouchableOpacity>
  )
}


export default CaptureButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2075CA',
    padding: 25,
    borderRadius: 25,
  }
})