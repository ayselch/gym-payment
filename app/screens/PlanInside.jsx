import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useGym } from '../contexts/GymContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'


const PlanInside = () => {
  const { selectedService } = useGym();
  const router = useRouter()

  if (!selectedService) {
    return <Text style={{ color: 'white', textAlign: 'center' }}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedService.image }} />
        <View style={styles.overlay}>
          <Text style={styles.serviceName}>{selectedService.name}</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.duration}>{selectedService.duration}</Text>
        <Text style={styles.price}>{selectedService.price}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{selectedService.description}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./PaymentScreens')}>
          <Text style={styles.buttonText}>Payment</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignContent: 'center',
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    width: 50,
    height: 50,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    alignItems: 'center',
  },
  serviceName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  duration: {
    fontSize: 18,
    color: '#CCCCCC',
  },
  descriptionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#BBBBBB',
    lineHeight: 22,
    textAlign: 'justify',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default PlanInside;
