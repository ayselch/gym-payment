import { useRouter } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useGym } from "./contexts/GymContext";


export default function Index() {
  const data = [
    {
      id: 1,
      name: "Powerlifting",
      price: "90$",
      duration: "3 months",
      image: 'https://hips.hearstapps.com/hmg-prod/images/powerlifter-with-strong-arms-lifting-weights-royalty-free-image-595768514-1546267269.jpg',
      description: 'Focus on strength development through the squat, bench press, and deadlift.',
    },
    {
      id: 2,
      name: "Yoga Masterclass",
      price: "150$",
      duration: "6 months",
      image: 'https://www.bikramyogalondon.com/wp-content/uploads/2024/02/2024_Esak_600x400.jpg',
      description: 'Improve your flexibility and inner peace with our premium yoga classes. This plan includes access to all yoga sessions, meditation guides, and personal coaching.',

    },
    {
      id: 3,
      name: "One-on-One Coaching",
      price: "200$",
      duration: "3 months",
      image: 'https://coaching.com.sg/wp-content/uploads/2021/01/coaching-1.jpg',
      description: 'Get a personalized training experience with our certified fitness coaches. Tailored workout plans and direct feedback to help you reach your fitness goals faster.',

    },
  ]

  const router = useRouter();
  const { setSelectedService, setPrice } = useGym()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Gym</Text>
      <Text style={styles.subtitle}>Our Services</Text>

      <View style={styles.serviceContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => {
              setSelectedService(item)
              setPrice(item.price)
              router.push(`/screens/PlanInside?id=${item.id}`)
            }}
          >
            <Text style={styles.serviceName}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.duration}>{item.duration}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#bbb",
    marginBottom: 20,
  },
  serviceContainer: {
    width: "100%",
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#FFA500",
    marginBottom: 5,
  },
  duration: {
    fontSize: 14,
    color: "#ccc",
  },
});
