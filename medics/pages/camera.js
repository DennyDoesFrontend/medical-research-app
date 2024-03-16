import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Camera } from 'expo-camera'
import { StatusBar } from 'expo-status-bar'

import { CaptureButton, FlashButton, ImagePreview} from '../components/Camera'
import Navigation from '../components/navigation'

function CameraScreen() {
  const [ permission, requestPermission ] = Camera.useCameraPermissions()
  const [ flash, setFlash ] = useState(Camera.Constants.FlashMode.off)
  const [ image, setImage ] = useState(null)
  const cameraRef = useRef(null)

  useEffect(() => {(
    async () => {
      await requestPermission()
    }
  )()}, [])

  function toggleFlash() {
    setFlash((current) => (current === Camera.Constants.FlashMode.off 
      ? Camera.Constants.FlashMode.on 
      : Camera.Constants.FlashMode.off))
  }

  async function takePicture() {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync()
        console.log(data)
        setImage(data.uri)
      } catch(e) {
        console.log(e)
      }
    }
  }

  function retakePicture() {
    setImage(null)
  }

  function scanImage() {
    alert('Scanning Image.....')
  }


  if (permission.status === 'denied') {
    return (
      <>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>Permission is required. Allow Permission from Settings</Text>
        </View>
        <View>
          <Navigation/>
        </View>
      </>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar style='light' />
        {!image ?
          <>
            <View style={styles.cameraContainer}>
              <Camera style={styles.camera} ref={cameraRef} ratio='16:9' autoFocus='on' flashMode={flash}/>
            </View>
            <FlashButton flashActive={flash} style={styles.flashButton} handleFlashPress={toggleFlash}/>
            <CaptureButton onPress={takePicture} style={styles.captureButton}/>
          </>
        :
          <ImagePreview style={styles.camera} image={image} onRetakePress={retakePicture} onScanPress={scanImage}/>
        }
      </View>
      <View>
        <Navigation/>
      </View>
    </>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000',
    paddingVertical: 40,
  },
  captureButton: {
    position: 'absolute',
    bottom: 65,
    alignSelf: 'center'
  },
  camera: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    borderRadius: 25,
    overflow: 'hidden',
  },
  flashButton: {
    position: 'absolute',
    top: 70,
    right: 25
  }
})