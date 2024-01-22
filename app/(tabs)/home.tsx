import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        Accedi
      </Link>
      <Link href={"/(modals)/calendario"}>
        Calendario
      </Link>
      <Link href={"/bilancipreview/1337"}>
        Dettaglio bilancio
      </Link>
    </View>
  )
}

export default Page