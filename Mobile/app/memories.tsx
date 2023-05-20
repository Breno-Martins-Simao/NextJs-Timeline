import { TouchableOpacity, View, ScrollView } from 'react-native'
import { Link } from 'expo-router'

// Images & Icons
import AppLogo from '../src/assets/nlw-spacetime-logo.svg'
import Icon from '@expo/vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Secure Store

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <AppLogo />

        <Link href="/new" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
            <Icon name="plus" size={16} color="#000" />
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  )
}
