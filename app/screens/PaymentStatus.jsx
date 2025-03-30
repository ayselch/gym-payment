import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { store } from 'expo-router/build/global-state/router-store';

const PaymentStatus = () => {
  const router = useRouter();
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(status);


  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const storedNumber = await SecureStore.getItemAsync('cardNumber');
        console.log(storedNumber);

        if (storedNumber == "1234 5678 1234 5678") {
          setStatus(true);
        } else {
          setStatus(false);
        }
      } catch (error) {
        console.error("Ödəniş statusunu yoxlayarkən xəta baş verdi:", error);
        setStatus(false);
      } finally {
        setLoading(false);
      }
    };

    checkPaymentStatus();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFA500" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.paymentText}>Payment</Text>
        <View style={{ width: 30 }} />
      </View>

      <View style={[styles.iconContainer, status === true ? styles.success : styles.error]}>
        <Ionicons
          name={status === true ? 'checkmark-circle' : 'close-circle'}
          size={100}
          color={status === true ? '#FFA500' : 'red'}
        />
      </View>

      <Text style={[styles.statusText, { color: status === true ? '#FFA500' : 'red' }]}>
        {status == true ? 'Success!' : 'Unsuccessful!'}
      </Text>
      <Text style={styles.messageText}>
        {status === true ? 'Everything is working normally.' : 'Oops! Something went wrong.'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  iconContainer: {
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#292929',
    marginBottom: 20,
  },
  success: {
    borderColor: 'green',
    borderWidth: 3,
  },
  error: {
    borderColor: 'red',
    borderWidth: 3,
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  messageText: {
    color: '#A0A0A0',
    fontSize: 16,
    marginTop: 10,
  },
});

export default PaymentStatus;
