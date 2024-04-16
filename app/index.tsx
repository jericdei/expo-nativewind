import { router } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
  return (
    <SafeAreaView>
      <View className='flex items-center justify-center h-screen w-screen bg-indigo-800'>
          <Text className='text-3xl text-slate-200'>This is the home ferds.</Text>
          <Text className='mt-16 text-white text-5xl hidden lg:block'>This is only shown on desktop</Text>
          <Text className='mt-16 text-white text-2xl block lg:hidden'>This is only shown on mobile</Text>
          <TouchableOpacity className='mt-16 rounded-xl px-4 py-2 bg-blue-400' onPress={() => router.push('/test')}>
            <Text className="text-slate-50 font-bold text-xl">Navigate to Test</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}