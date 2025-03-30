import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useGym } from "../contexts/GymContext"
import * as SecureStore from 'expo-secure-store';

const PaymentConfirm = () => {
  const router = useRouter()
  const { price } = useGym()
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const getCardInfo = async () => {
      try {
        const storedNumber = await SecureStore.getItemAsync('cardNumber');
        const storedHolder = await SecureStore.getItemAsync('cardHolder');

        if (storedNumber && storedHolder) {
          setCardHolder(storedHolder);
          setCardNumber(`**** ${storedNumber.slice(-4)}`);
        } else {
          console.log("Kart məlumatı tapılmadı!");
        }

        const currentDate = new Date();
        const formattedDate = `${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}, ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
        setDate(formattedDate);
      } catch (error) {
        console.error("Kart məlumatlarını oxuyarkən xəta baş verdi:", error);
      }
    };

    getCardInfo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.paymentText}>Payment</Text>
        <View style={{ width: 30 }} />
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{price}</Text>
      </View>

      <View style={styles.paymentDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Göndərən</Text>
          <Text style={styles.value}>{cardHolder || '---'}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Hesab</Text>
          <Text style={styles.value}>{cardNumber || '**** ----'}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Məbləğ</Text>
          <Text style={styles.value}>{price}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Tarix</Text>
          <Text style={styles.value}>{date}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('./PaymentStatus')}>
          <Text style={styles.buttonText}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    paddingHorizontal: 20
  },
  headerContainer: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 20
  },
  paymentText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  priceContainer: {
    borderWidth: 2,
    borderColor: "#FFA500",
    borderRadius: 100,
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    backgroundColor: '#292929'
  },
  priceText: {
    color: "#FFA500",
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  paymentDetails: {
    backgroundColor: '#292929',
    marginTop: 40,
    padding: 20,
    borderRadius: 10
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444'
  },
  label: {
    color: '#A0A0A0',
    fontSize: 16
  },
  value: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 30,
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
})

export default PaymentConfirm
