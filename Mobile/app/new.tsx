import {
  Switch,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native'
import { Link } from 'expo-router'

// Images & Icons
import AppLogo from '../src/assets/nlw-spacetime-logo.svg'
import Icon from '@expo/vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()
  const [isPublic, setIsPublic] = useState(false)
  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <AppLogo />

        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#FFF" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch
            value={isPublic}
            onValueChange={setIsPublic}
            trackColor={{ false: '#767577', true: '#372560' }}
            thumbColor={isPublic ? '#9b79ea' : '#9e9ea0'}
          />
          <Text className="font-body text-base text-gray-200">
            Set as a public memory
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="h-32 items-center justify-center rounded-lg border-dashed border-gray-500 bg-black/20"
        >
          <View className="flex-row items-center gap-2">
            <Icon name="image" color="#fff" />
            <Text className="font-body text-sm text-gray-200">
              Add a image or video as thumbnail
            </Text>
          </View>
        </TouchableOpacity>

        <TextInput
          multiline
          className="p-0 font-body text-lg text-gray-50"
          placeholderTextColor={'#56565a'}
          placeholder="Feel free to add histories, facts, videos and infomations about the experience that should be saved in time forever "
        />

        <TouchableOpacity
          activeOpacity={0.7}
          className="items-center rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Save Memory
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
