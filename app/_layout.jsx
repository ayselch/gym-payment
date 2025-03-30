import { Stack } from "expo-router";
import GymProvider from "./contexts/GymContext";

export default function RootLayout() {
  return (
    <GymProvider>
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name="index" />
        <Stack.Screen options={{ headerShown: false }} name="screens" />

      </Stack>
    </GymProvider>

  );
}
