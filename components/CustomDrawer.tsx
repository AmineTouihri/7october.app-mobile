
import React from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";

export default function customDrawerContent(props:any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          <Text style={styles.red}>المجزرة بدات</Text>
          <Text> قبل </Text>
          <Text style={styles.red}>7 أكتوبر</Text>
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 12,
    fontFamily: "NotoNaskhArabic-Regular", // Make sure this font is loaded
    color: "#666",
    textAlign: "center",
  },
  red: {
    color: "#dc2626",
    fontWeight: "bold",
  },
});
