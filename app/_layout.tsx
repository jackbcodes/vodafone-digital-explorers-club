import { useEffect } from 'react'

import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'home',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name='home'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='level-1'
        options={{ title: 'Level 1' }}
      />
      <Stack.Screen
        name='level-2'
        options={{ title: 'Level 2' }}
      />
      <Stack.Screen
        name='level-3'
        options={{ title: 'Level 3' }}
      />
      <Stack.Screen
        name='level-4'
        options={{ title: 'Level 4' }}
      />
      <Stack.Screen
        name='level-5'
        options={{ title: 'Level 5' }}
      />
      <Stack.Screen
        name='level-6'
        options={{ title: 'Level 6' }}
      />
      <Stack.Screen
        name='modal'
        options={{ presentation: 'modal' }}
      />
    </Stack>
  )
}
