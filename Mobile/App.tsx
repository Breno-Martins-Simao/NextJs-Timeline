import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import AppLogo from './src/assets/nlw-spacetime-logo.svg'
import { styled } from 'nativewind'

import { useAuthRequest, makeRedirectUri } from 'expo-auth-session'
import { useEffect } from 'react'

const StyleStripes = styled(Stripes)

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/ab14f86bc471c5d22e76',
}

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: 'ab14f86bc471c5d22e76',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'Spacetime',
      }),
    },
    discovery,
  )

  /*
  async function handleGithubOAuthCode(code: string) {
    const response = await api.post('/register', {
      code,
    })

    const { token } = response.data

    await SecureStore.setItemAsync('token', token)

    router.push('/memories')
  }
  */

  useEffect(() => {
    /* 
    console.log(
      makeRedirectUri({
        scheme: 'Spacetime',
      }),
    ) 
    //Re Use the code above to debug using Expo, the output should be configured on Oauth application in Github dev settings
    */

    if (response?.type === 'success') {
      const { code } = response.params

      console.log(code)
    }
  }, [response])

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyleStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <AppLogo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Your time capsule
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Collect moments that should not be forgotten in the cosmos and share
            it with the ones you love!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
          onPress={() => signInWithGithub()}
        >
          <Text className="font-alt text-sm uppercase text-black">
            REGISTER A MEMORY
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Made with 💟 during Rocketseat NLW
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
