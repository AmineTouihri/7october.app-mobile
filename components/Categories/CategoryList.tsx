import React from "react";
import { Text, TouchableOpacity, View, I18nManager } from "react-native";

// Just in case RTL isn't enforced globally:
I18nManager.allowRTL(true);

export default function CategoryList({ categories, selected, onSelect }:any) {
  return (
    <View
      style={{
        flexDirection: "row-reverse", 
        flexWrap: "wrap",
        gap: 5,
        marginVertical: 10,
        justifyContent: "flex-start",
        padding:5
      }}
    >
      {categories.map((cat:any) => {
        const isSelected = selected === cat._id;
        return (
          <TouchableOpacity
            key={cat._id}
            onPress={() => onSelect(cat._id)}
            style={{
              backgroundColor: isSelected ? "#c70000" : "#f2f2f2",
              borderColor: isSelected ? "#c70000" : "#ccc",
              borderWidth: 1,
              borderRadius: 20,
              paddingVertical: 6,
              paddingHorizontal: 14,
            }}
          >
            <Text
              style={{
                color: isSelected ? "white" : "#333",
                fontWeight: "500",
                textAlign: "right",
              }}
            >
              {cat.name} 
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
