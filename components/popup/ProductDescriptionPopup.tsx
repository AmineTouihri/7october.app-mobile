import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  description: string;
  title: string;
  imageUrl?: string;
  source?: string;
}

export default function ProductDescriptionPopup({
  isVisible,
  onClose,
  description,
  title,
  imageUrl,
  source,
}: Props) {
  const handleOpenLink = () => {
    if (source) {
      Linking.openURL(source);
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          {imageUrl && (
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="contain"
            />
          )}

          <Text style={styles.title}>{title}</Text>

          <Text style={styles.description}>{description}</Text>

          {source && (
            <TouchableOpacity onPress={handleOpenLink}>
              <Text style={styles.linkText}>شوف المصدر</Text>
            </TouchableOpacity>
          )}

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>إغلاق</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: "85%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "right",
    marginBottom: 20,
  },
  linkText: {
    fontSize: 16,
    color: "#007bff",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#F03849",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
});
