import React  from "react";
import {useFonts} from 'expo-font'
import { Stack } from "expo-router";
import '../global.css'
export default function RootLayout(){

  const [fontsLoaded] = useFonts({
    'NotoNaskhArabic-Regular': require('../assets/fonts/NotoNaskhArabic-VariableFont_wght.ttf'),
    'NotoNaskhArabic-Bold': require('../assets/fonts/NotoNaskhArabic-Bold.ttf'),

  });

return (
  
    <Stack>
      <Stack.Screen name="(splash)" options={{headerShown:false}}/>
      <Stack.Screen name="(tabs)" options={{headerShown:false,gestureEnabled: true,contentStyle: { backgroundColor: '#fff' }}}/>
      {/* <Stack.Screen name="(scan)" options={{headerShown:false,contentStyle: { backgroundColor: '#fff' }}}/> */}

    </Stack>
)

}

