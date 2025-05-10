// components/ProductCard.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, I18nManager } from "react-native";
import { AnimatedPingDot } from "../AnimatedPingDot";
import ProductDescriptionPopup from "../popup/ProductDescriptionPopup";

I18nManager.forceRTL(true);

export default function ProductCard({ product }: any) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [popUpSource, setPopupSource] = useState("");


  const getImageUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://api.7october.app/bc/api${url}`; 
  };

  const handleProofPress = () => {
    setPopupContent(product.description);
    setPopupTitle("تفاصيل المنتج");
    setShowPopup(true);
    setPopupSource(product.source);
  };

  const handleAlternativePress = () => {
    
    setPopupContent(product.alternative?.title || "لا يوجد وصف متاح للبديل");
    setPopupTitle(" البديل");
    setShowPopup(true);
  };

  return (
    <>
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
          <TouchableOpacity
            style={{
              backgroundColor: "#F03849",
              borderRadius: 5,
              paddingHorizontal: 12,
              paddingVertical: 4,
            }}
            onPress={handleProofPress}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
              الدليل
            </Text>
          </TouchableOpacity>

          {product.alternative && (
            <TouchableOpacity
              style={{
                backgroundColor: "#000",
                borderRadius: 5,
                paddingHorizontal: 12,
                paddingVertical: 4,
              }}
              onPress={handleAlternativePress}
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

        {/* Image */}
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
            color={product.impact === "LOW IMPACT" ? "#FC8C01" : "#e40009"}
          />
        </View>
      </View>

      {/* Popup */}
      <ProductDescriptionPopup
  isVisible={showPopup}
  onClose={() => setShowPopup(false)}
  description={popupContent}
  title={popupTitle}
  imageUrl={getImageUrl(product.image)}
  source={popUpSource} // ✅ Add this line
/>
    </>
  );
}