import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import * as SecureStore from 'expo-secure-store';



const PaymentScreens = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiryMonth, setExpiryMonth] = useState('')
  const [expiryYear, setExpiryYear] = useState('')
  const [cvv, setCvv] = useState('')


  const router = useRouter()

  const formatCardNumber = (num) => {
    return num.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const saveCardInfo = async () => {
    if (number && name) {
      await SecureStore.setItemAsync('cardNumber', number.toString());
      await SecureStore.setItemAsync('cardHolder', name.toString());
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.paymentText}>Payment</Text>
        <View style={{ width: 30 }} />
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.cardNumber}>
          {number ? formatCardNumber(number) : "**** **** **** 3947"}
        </Text>

        <View style={styles.cardDetails}>
          <View>
            <Text style={styles.cardLabel}>Card Holder Name</Text>
            <Text style={styles.cardText}>{name || "John Henry"}</Text>
          </View>
          <View>
            <Text style={styles.cardLabel}>Expiry date</Text>
            <Text style={styles.cardText}>{expiryMonth && expiryYear ? `${expiryMonth}/${expiryYear}` : "05/23"}</Text>
          </View>
        </View>


      </View>


      <View style={styles.cardInfoContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#aaa"
        />

        <TextInput
          style={styles.input}
          value={number}
          onChangeText={(text) => setNumber(formatCardNumber(text))}
          placeholder="**** **** **** 3947"
          keyboardType="numeric"
          maxLength={19}
          placeholderTextColor="#aaa"
        />

        <View style={styles.row}>
          <View style={styles.pickerContainer}>

            <Picker
              selectedValue={expiryMonth}
              onValueChange={(itemValue) => setExpiryMonth(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Month" value="" />
              <Picker.Item label="01" value="01" />
              <Picker.Item label="02" value="02" />
              <Picker.Item label="03" value="03" />
              <Picker.Item label="04" value="04" />
              <Picker.Item label="05" value="05" />
              <Picker.Item label="06" value="06" />
              <Picker.Item label="07" value="07" />
              <Picker.Item label="08" value="08" />
              <Picker.Item label="09" value="09" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
            </Picker>

          </View>


          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={expiryYear}
              onValueChange={(itemValue) => setExpiryYear(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Year" value="" />
              <Picker.Item label="2024" value="2024" />
              <Picker.Item label="2025" value="2025" />
              <Picker.Item label="2026" value="2026" />
              <Picker.Item label="2027" value="2027" />
              <Picker.Item label="2028" value="2028" />
            </Picker>
          </View>

        </View>

        <TextInput
          style={styles.input}
          value={cvv}
          onChangeText={setCvv}
          placeholder="CVV"
          keyboardType="numeric"
          maxLength={3}
          placeholderTextColor="#bbb"
        />

      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            saveCardInfo()
            router.push('./PaymentConfirm')
          }}
        >
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
  backButton: {
    padding: 10
  },
  paymentText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardContainer: {
    width: '100%',
    height: 180,
    backgroundColor: "#292B38",
    borderRadius: 15,
    padding: 15,
    justifyContent: "space-between",
    marginVertical: 20
  },
  cardNumber: {
    color: 'white',
    fontSize: 22,
    letterSpacing: 3,
    textAlign: "center"
  },
  cardLabel: {
    color: "#bbb",
    fontSize: 12
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
  cardInfoContainer: {
    alignItems: "center"
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  cardLabel: {
    color: '#bbb',
    fontSize: 12,
  },
  input: {
    width: '100%',
    backgroundColor: "#42424C",
    marginVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: "white",
    fontSize: 16
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%'
  },
  pickerContainer: {
    width: '48%',
    backgroundColor: "#42424C",
    borderRadius: 10,
    justifyContent: "center"
  },
  picker: {
    color: "white"
  },
  buttonContainer: {
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
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

export default PaymentScreens
