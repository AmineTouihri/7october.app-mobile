
import React  from "react";
import { Stack } from "expo-router";

export default function RootLayout(){

return (
    <Stack>
        <Stack.Screen name="scan" options={{headerShown:false,presentation:'modal'}} />
    </Stack>
)

}