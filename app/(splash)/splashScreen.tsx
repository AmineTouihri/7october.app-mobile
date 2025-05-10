import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Text,
  useWindowDimensions,
  View,
  StyleSheet,
} from "react-native";

export default function Splash() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      router.replace("/Boycott");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={[styles.container, { width, height }]}>
      <Animated.View style={{ opacity: fadeAnim, alignItems: "center" }}>
        {/* Logo */}
        <Image
          source={require("../../assets/images/logo_main.png")}
          style={{ width: 120, height: 120, marginBottom: 20 }}
        />

        {/* Arabic message */}
        <Text style={styles.line}>
          <Text style={styles.red}>المجزرة بدات</Text>
          <Text> قبل </Text>
          <Text style={styles.red}>7 أكتوبر</Text>
        </Text>

       

        {/* Bottom text */}
        <Text style={styles.bottomText}>
          <Text style={styles.boldColor}>Boycotting</Text>
          <Text> is a lifestyle.</Text>
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  red: {
    color: "#dc2626",
    fontWeight: "bold",
  },
  line: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "NotoNaskhArabic-Bold", // ensure this matches your font import
  },
  bottomText: {
    marginTop: 30,
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    fontWeight: "500",
  },
  boldColor: {
    fontWeight: "bold",
    color: "#dc2626",  },
});
