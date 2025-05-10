import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, I18nManager } from "react-native";
import { AnimatedPingDot } from "../AnimatedPingDot";

I18nManager.forceRTL(true); // make sure your app supports RTL

export default function AlternativeCard({ product, onProofPress, onAlternativePress }: any) {
  const [showFront, setShowFront] = useState(true);

  const getImageUrl = (url: string) => {
    if (!url) return ''; // handle empty URLs
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://api.7october.app/bc/api${url}`; 
  };

  return (
    <View
      style={{
        flexDirection: "row-reverse",
        backgroundColor: "#EFECEC",
        borderRadius: 12,
        padding: 10,
        alignItems: "center",
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#ccc",
      }}
    >
      {/* Buttons */}
      <View style={{ flexDirection: "column", gap: 6 }}>
       
        {product.alternative && (
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              borderRadius: 5,
              paddingHorizontal: 12,
              paddingVertical: 4,
            }}
            onPress={onAlternativePress}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
              البديل
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Product name */}
      <Text
        style={{
          flex: 1,
          textAlign: "right",
          fontWeight: "700",
          fontSize: 16,
          marginHorizontal: 10,
        }}
        numberOfLines={2}
      >
        {product.title}
      </Text>

      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: getImageUrl(product.image) }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "white",
          }}
        />
        <AnimatedPingDot
          color="#008000"
        />
      </View>
    </View>
  );
}
