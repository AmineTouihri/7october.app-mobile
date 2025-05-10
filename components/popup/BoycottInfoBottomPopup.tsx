// components/BottomPopup.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { X, Info } from "lucide-react-native";

const BoycottInfoBottomPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Fixed Information Button */}
      <TouchableOpacity 
        onPress={toggleModal} 
        className="absolute top-4 left-4 p-2 bg-red-600 rounded-full flex items-center justify-center w-10 h-10 shadow-lg z-50">
        <Info color="white" size={20} />
      </TouchableOpacity>

      {/* Bottom Popup Modal */}
      <Modal
        isVisible={isVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        style={{ justifyContent: "flex-end", margin: 0 }}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View className="bg-white rounded-t-2xl p-4">
          <View className="flex-row justify-between items-center mb-2 mr-4">
            <Text className="text-lg font-bold text-center w-full rtl">معلومات عن المقاطعة</Text>
            <TouchableOpacity onPress={toggleModal} >
              <X size={24} color="#e40009" />
            </TouchableOpacity>
          </View>

          <Text className="text-gray-700 text-right mt-2">
            كل منتوج و كل علامة تجارية عندها تأثير. قسمناهم لزوز انواع: اللي تأثيره متوسط (يكون بالبرتقالي) و اللي تأثيره عالي (يكون بالأحمر)
          </Text>

          <View className="mt-4">
            <View className="flex-row items-center justify-end mb-1">
              <Text className="text-red-600 font-bold text-right">تأثير عالي (HIGH IMPACT)</Text>
            </View>
            <Text className="text-right text-gray-700">- الاستثمار العسكري</Text>
            <Text className="text-right text-gray-700">- بناء المستوطنات</Text>
            <Text className="text-right text-gray-700">- الاستثمار التكنولوجي</Text>
            <Text className="text-right text-red-600 font-bold">
              حجم الاستثمار السنوي يفوق 1 مليار دولار
            </Text>
          </View>

          <View className="mt-4">
            <View className="flex-row items-center justify-end mb-1">
              <Text className="text-orange-600 font-bold text-right">تأثير متوسط (MEDIUM IMPACT)</Text>
            </View>
            <Text className="text-right text-gray-700">- الدعم الإعلامي</Text>
            <Text className="text-right text-gray-700">- بني السردية</Text>
            <Text className="text-right text-orange-600 font-bold">
              حجم الاستثمار السنوي أقل من 1 مليار دولار
            </Text>
          </View>
 <Text className="text-right text-gray-700 mt-4 text-red-300"  >المجزرة بدات
           قبل 
         7 أكتوبر</Text>
        </View>
      </Modal>
    </>
  );
};

export default BoycottInfoBottomPopup;
