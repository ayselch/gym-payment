import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack  >
      <Stack.Screen options={{ headerShown: false }} name="PaymentScreens" />
      <Stack.Screen options={{ headerShown: false }} name="PlanInside" />
      <Stack.Screen options={{ headerShown: false }} name="PaymentConfirm" />
      <Stack.Screen options={{ headerShown: false }} name="PaymentStatus" />
    </Stack>
  );
}
