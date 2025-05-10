// app/scan/index.tsx
import { CameraView, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Modal } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRef, useState } from 'react';

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<BarcodeScanningResult | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const cameraRef = useRef<CameraView>(null);

  const handleBarcodeScanned = (scanningResult: BarcodeScanningResult) => {
    setScannedData(scanningResult);
    takePhoto(); 
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setCapturedImage(photo.uri);
        setShowResult(true);
      } catch (e) {
        // console.error('Failed to take photo:', e);
      }
    }
  };

  const resetScanner = () => {
    setScannedData(null);
    setCapturedImage(null);
    setShowResult(false);
  };

  if (!permission) {
    return <View style={styles.loadingContainer} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          سكاني البرودوي واحنا نقولولك مقاطَع ولا لا
        </Text>
        <TouchableOpacity 
          onPress={requestPermission} 
          style={styles.permissionButton}
        >
          <Text style={styles.permissionButtonText}>ابدا سكّانِي</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ['ean13', 'ean8', 'upc_a', 'upc_e', 'code128'], 
        }}
        onBarcodeScanned={scannedData ? undefined : handleBarcodeScanned}
      />
      
      
      <View style={styles.overlay}>
        <View style={styles.scanFrame} />
        <Text style={styles.scanGuideText}>ضع الباركود داخل الإطار</Text>
      </View>

      {/* Result Modal */}
      <Modal visible={showResult} transparent animationType="slide">
        <View style={styles.resultContainer}>
          <View style={styles.resultContent}>
            {capturedImage && (
              <Image 
                source={{ uri: capturedImage }} 
                style={styles.capturedImage} 
                resizeMode="contain"
              />
            )}
            
            {scannedData && (
              <View style={styles.barcodeDataContainer}>
                <Text style={styles.barcodeType}>
                  نوع الباركود: {scannedData.type}
                </Text>
                <Text style={styles.barcodeData}>
                  {scannedData.data}
                </Text>
              </View>
            )}

            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={resetScanner}
            >
              <MaterialIcons name="close" size={24} color="white" />
              <Text style={styles.closeButtonText}>إغلاق</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const { width } = Dimensions.get('window');
const scanFrameSize = width * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    width: scanFrameSize,
    height: scanFrameSize * 0.5,
    borderColor: '#e0519d',
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  scanGuideText: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  resultContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  capturedImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  barcodeDataContainer: {
    width: '100%',
    marginBottom: 20,
  },
  barcodeType: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  barcodeData: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  closeButton: {
    flexDirection: 'row',
    backgroundColor: '#e0519d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  permissionText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  permissionButton: {
    backgroundColor: '#e0519d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  permissionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});