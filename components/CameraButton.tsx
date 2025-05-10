import { useRouter } from "expo-router";
import { TouchableOpacity, StyleSheet, Animated, View, Easing } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";

export default function CameraButton() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 2.5,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[
          styles.ping,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      />
      <TouchableOpacity
        onPress={() => router.push("/scan")}
        style={styles.button}
      >
        <Ionicons name="camera" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 50,
    right: 20,
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#e0519d",
    borderRadius: 30,
    padding: 15,
    elevation: 5,
  },
  ping: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e0519d",
  },
});
