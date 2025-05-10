import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function CustomHeader({ title }:any) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.line}>
        <Text style={styles.red}>المجزرة بدات</Text>
        <Text> قبل </Text>
        <Text style={styles.red}>7 أكتوبر</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  title: {
    fontSize: 20,
    fontFamily: "Arabic-Font",
    fontWeight: "bold",
    color: "#000",
  },
  line: {
    fontSize: 14,
    fontFamily: "NotoNaskhArabic-Regular",
    color: "#333",
    marginTop: 4,
  },
  red: {
    color: "#dc2626",
    fontWeight: "bold",
  },
});
