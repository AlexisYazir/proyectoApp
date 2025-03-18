import React from "react";
import { AuthProvider } from "./app/controller/userController";
import Toast from "react-native-toast-message";
import AppNavigator from "./navigation/appNavigator";
export default function App() {
  return (
      <AuthProvider>
        <AppNavigator /> 
        <Toast />
      </AuthProvider>
  );
}