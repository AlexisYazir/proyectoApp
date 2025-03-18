import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  DashboardScreen: undefined; // Asegúrate de que la ruta "Stack" está definida
  HomeScreenUser: undefined;
};

export default function HomeScreenUser() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido de nuevo!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DashboardScreen")}
      >
        <Text style={styles.buttonText}>Ir al Panel de Control</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("DashboardScreen")}
      >
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcefd4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff6600",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
