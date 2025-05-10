import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export function AnimatedPingDot({ color }: { color: string }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 2.5,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();

    return () => loop.stop();
  }, []);

  return (
    <View style={{ position: "absolute", bottom: 0, right: 0 }}>
      <Animated.View
        style={{
          position: "absolute",
          width: 14,
          height: 14,
          borderRadius: 7,
          backgroundColor: color,
          opacity: opacityAnim,
          transform: [{ scale: scaleAnim }],
        }}
      />
      <View
        style={{
          width: 14,
          height: 14,
          borderRadius: 7,
          backgroundColor: color,
          borderWidth: 1,
          borderColor: "white",
        }}
      />
    </View>
  );
}
