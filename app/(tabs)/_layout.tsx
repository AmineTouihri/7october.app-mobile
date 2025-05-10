import { Text, View,StyleSheet, Image } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { I18nManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import customDrawerContent from "@/components/CustomDrawer";

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function TabsLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={customDrawerContent}
        screenOptions={{
          drawerHideStatusBarOnOpen:true,
          drawerPosition: "right", // Drawer opens from right
          drawerType: "front", // Ensure drawer overlaps content
          headerTitleAlign: "center", // Right-align header title
          headerTitleStyle: {
            fontFamily: "NotoNaskhArabic-Bold", // Use Arabic font
            fontSize: 20,
          },
          drawerStyle: {
            width: "60%", // Adjust drawer width
          },
          headerLeft:()=>(
            <View style={{ marginLeft: 10 }}>
            <Image
              source={require('@/assets/images/logo_main.png')} 
              style={{ width: 40, height: 40 }} 
            />
          </View>
          ),
          drawerActiveTintColor: "#FF0000", // Active item color
          drawerInactiveTintColor: "#333", // Inactive item color
        }}
      >
        <Drawer.Screen
          name="Boycott"
          options={{
            headerTitle: " شلازم نقاطع",
            drawerLabel: "مقاطعة",
            drawerIcon: ({ size, color, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Alternatives"
          options={{
            headerTitle: "شنوا نجم نشري",
            drawerLabel: "البدائل",
            drawerIcon: ({ size, color, focused }) => (
              <Ionicons
                name={focused ? "swap-horizontal" : "swap-horizontal-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Movements"
          options={{
            headerTitle: "تحرّكات",
            drawerLabel: "تحرّكات",
            drawerIcon: ({ size, color, focused }) => (
              <Ionicons
                name={focused ? "megaphone" : "megaphone-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="idea-reclamation"
          options={{
            headerTitle: "اقتراح",
            drawerLabel: "اقتراح",
            drawerIcon: ({ size, color, focused }) => (
              <Ionicons
                name={focused ? "build" : "build-outline"}
                size={size}
                color={color}
              />

              
            ),
          }}
        />

        <Drawer.Screen
          name="scan"
          options={{
            headerTitle: "قِراءة الباركود",
            drawerLabel: "قِراءة الباركود",
            drawerIcon: ({ size, color, focused }) => (
              <Ionicons
                name={focused ? "barcode" : "barcode-outline"}
                size={size}
                color={color}
              />

              
            ),
          }}
        />
      </Drawer>
     
    </GestureHandlerRootView>
  );
}
