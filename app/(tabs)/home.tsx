import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        Login
      </Link>
      <Link href={"/(modals)/aggiungiTurni"}>
        Aggiungi Turno
      </Link>
      <Link href={"/(modals)/aggiungiSpesa"}>
        Aggiungi Spesa
      </Link>
      <Link href={"/listing/1337"}>
        Dettaglio turno
      </Link>
    </View>
  )
}

export default Page