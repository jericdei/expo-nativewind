import { router } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Page() {
  return (
    <View className='flex items-center justify-center h-screen w-screen'>
      <Text className='text-3xl text-red-500'>This is the test page.</Text>

      <TouchableOpacity className='mt-16 rounded-xl px-4 py-2 bg-blue-400' onPress={() => router.navigate('/')}>
        <Text className="text-slate-50 font-bold text-xl">Navigate to Index</Text>
      </TouchableOpacity>
    </View>
  )
}