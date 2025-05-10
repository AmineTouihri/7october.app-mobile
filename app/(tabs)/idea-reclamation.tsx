import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
  ScrollView,
} from "react-native";

// Enable RTL layout
I18nManager.forceRTL(true);

export default function ProductReportForm() {
  const [type, setType] = useState("مقاطعة");
  const [title, setTitle] = useState("");
  const [proofLink, setProofLink] = useState("");
  const [alternative, setAlternative] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    const formData = { type, title, proofLink, alternative, reason };
    console.log("Form submitted:", formData);
    // You can send formData to your API here
  };

  const handleCancel = () => {
    // Clear all fields
    setTitle("");
    setProofLink("");
    setAlternative("");
    setReason("");
    setType("مقاطعة");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>ثمة حاجة ناقصة؟</Text>

      {/* Type selector */}
      <View style={styles.radioGroup}>
        {["مقاطعة", "بديل", "فكرة"].map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.radioOption}
            onPress={() => setType(option)}
          >
            <View style={styles.radioCircle}>
              {type === option && <View style={styles.selectedCircle} />}
            </View>
            <Text style={styles.radioLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Conditional Fields */}
      {type === "فكرة" ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="عنوان الفكرة"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="وصف الفكرة"
            value={reason}
            onChangeText={setReason}
            multiline
          />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="إسم العلامة التجارية"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="رابط الدليل"
            value={proofLink}
            onChangeText={setProofLink}
          />
          <TextInput
            style={styles.input}
            placeholder="بديل (اختياري)"
            value={alternative}
            onChangeText={setAlternative}
          />
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="السبب"
            value={reason}
            onChangeText={setReason}
            multiline
          />
        </>
      )}

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>ابعث</Text>
        </TouchableOpacity>
       
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "stretch",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  radioGroup: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginHorizontal: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#888",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#F03849",
  },
  radioLabel: {
    marginRight: 6,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    textAlign: "right",
  },
  buttonRow: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  submitButton: {
    backgroundColor: "#F03849",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: "#aaa",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
