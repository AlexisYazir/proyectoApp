import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Animated, ScrollView,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form"; // Importa el hook para formularios
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"; // Importa los iconos
import { useAuth } from "../../controller/userController"; // Importa el hook useAuth
import Toast from "react-native-toast-message";
import { UserLogin } from "../../interfaces/UserLogin";
import { styles } from "../../css/forms"; // Importa los estilos desde el archivo externo

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

export const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { signin, errors: loginErrors = [], clearErrors } = useAuth(); // Usa el hook useAuth
  const {control,handleSubmit, formState: { errors: formErrors },} = useForm<UserLogin>(); // Usa react-hook-form

  const [scale, setScale] = useState(new Animated.Value(1)); // Animación para el botón

  // Función para manejar el inicio de sesión
  const handleLogin = async (data: UserLogin) => {
    clearErrors(); // Limpiar errores anteriores

    const role = await signin(data); // Llamar a la función signin

    if (role) {
      // Si el inicio de sesión es exitoso, redirigir al usuario según su rol
      Toast.show({
        type: "success",
        text1: `Bienvenido ${role}`,
        position: "top",
      });
      setTimeout(() => clearErrors(), 4000); // Limpiar errores después de 4 segundos
    } else {
      if (loginErrors.length > 0) {
        loginErrors.forEach((error) => {
          Toast.show({
            type: "error",
            text1: "Error al iniciar sesión",
            text2: error,
            position: "top",
          });
        });
        const timer = setTimeout(() => {
          clearErrors();
        }, 5000);
        return () => clearTimeout(timer);
      } 
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* Campo: Nombre de usuario */}
      <Text style={styles.label}>Nombre de usuario</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="email-outline" // Icono de correo
                size={20}
                style={styles.icon}
              />
              <TextInput
                placeholder="Nombre de usuario"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          )}
          name="username"
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {formErrors.username && (
          <Text style={styles.errorText}>{formErrors.username.message}</Text>
        )}
      </View>

      {/* Campo: Contraseña */}
      <Text style={styles.label}>Contraseña</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="lock-outline" // Icono de candado para contraseña
                size={20}
                style={styles.icon}
              />
              <TextInput
                placeholder="Contraseña"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>
          )}
          name="password"
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {formErrors.password && (
          <Text style={styles.errorText}>{formErrors.password.message}</Text>
        )}
      </View>

      {/* Botón de inicio de sesión */}
      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          style={styles.button}
          onPressIn={() =>
            Animated.spring(scale, {
              toValue: 0.95,
              useNativeDriver: true,
            }).start()
          }
          onPressOut={() =>
            Animated.spring(scale, {
              toValue: 1,
              useNativeDriver: true,
            }).start()
          }
          onPress={handleSubmit(handleLogin)}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Enlace para registrarse */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.linkText}>
          ¿No tienes una cuenta? Regístrate aquí
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
