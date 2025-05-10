import { Text, View } from "react-native";

import React  from "react";
import { Stack } from "expo-router";

export default function RootLayout(){

return (
    <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="splashScreen" options={{headerShown:false}} />
    </Stack>
)

}