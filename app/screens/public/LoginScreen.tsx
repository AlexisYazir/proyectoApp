import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "../../css/forms"; // Importa los estilos desde el archivo externo
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"; // Importa los iconos

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

export const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [borderColor, setBorderColor] = useState("#E67E22"); // Estado para el borde de los inputs
  const [scale, setScale] = useState(new Animated.Value(1)); // Animación para el botón

  // Función para manejar el enfoque en el input
  const handleFocus = () => {
    setBorderColor("#D35400"); // Cambia el borde cuando el input tiene el foco
  };

  // Función para manejar el desenfoque del input
  const handleBlur = () => {
    setBorderColor("#E67E22"); // Vuelve al color original cuando el input pierde el foco
  };

  // Función para animar el botón al presionar
  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* Campo de correo electrónico con icono */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="email-outline" // Icono de correo
          size={20}
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, { borderColor }]} // Aplica el color dinámico al borde
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>

      {/* Campo de contraseña con icono */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="lock-outline" // Icono de candado para contraseña
          size={20}
          style={styles.icon}
        />
        <TextInput
          style={[styles.input, { borderColor }]} // Aplica el color dinámico al borde
          placeholder="Contraseña"
          secureTextEntry
          autoCapitalize="none"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>

      {/* Botón de inicio de sesión */}
      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          style={styles.button}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Enlace para registrarse */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.linkText}>¿No tienes una cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
