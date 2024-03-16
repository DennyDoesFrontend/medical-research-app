import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

function FlashButton({ style, handleFlashPress, flashActive }) {

  function handleOnPress() {
    handleFlashPress()
  }

  return (
    <TouchableOpacity style={style} onPress={handleOnPress}>
      <MaterialCommunityIcons name={flashActive ? 'flash' : 'flash-off'}  size={40} color= '#fff' />
    </TouchableOpacity>
  )
}

export default FlashButton