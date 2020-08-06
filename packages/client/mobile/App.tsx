/* eslint-disable camelcase */
import React from 'react'

import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts
} from '@expo-google-fonts/archivo'
import {
  Poppins_400Regular,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo'
import { StatusBar } from 'expo-status-bar'

import AppStack from './src/routes/AppStack'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    )
  }
}

export default App
