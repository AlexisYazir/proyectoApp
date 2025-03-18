import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, ScrollView,} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";
import Toast from "react-native-toast-message";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAuth } from "../../controller/userController"; // Cambia a useAuth
import { styles } from "../../css/forms"; // Asumiendo que los estilos están importados aquí
import { UserLogin } from "../../interfaces/UserLogin";

export type RootStackParamList = {
  Login: undefined;
};

interface FormData {
  username: string;
  name: string;
  apellidoP: string;
  telefono: string;
  email: string;
  password: string;
  password2: string;
  imagen?: string;
  pregunta: string;
  respuesta: string;
}

function RegisterScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {control, handleSubmit, setValue, formState: { errors }, watch,} = useForm<FormData>();
  const { signup,errors: registerErrors = [], clearErrors,  getQuestions, questions} = useAuth(); // Usa useAuth en lugar de useAuthController
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // URL de la imagen predeterminada
  const defaultImageUrl =
    "https://i.ibb.co/H8xpXMJ/pexels-sebastian-189349.jpg";

  useEffect(() => {
    getQuestions(); // Obtener las preguntas de seguridad al cargar el componente
  }, []);

  //ASI SE OBTIENEN LAS PREGUNTAS DE SEGURIDAD
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getQuestions();
  //     //console.log(data);
  //   };

  //   fetchData(); // Llama a la función para obtener y mostrar las preguntas
  // }, []); 

  useEffect(() => {
    if (registerErrors.length > 0) {
      registerErrors.forEach((error) => {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error,
          position: "top",
        });
      });
      setTimeout(() => clearErrors(), 4000); // Limpiar errores después de 4 segundos
    }
  }, [registerErrors, clearErrors]);

  useEffect(() => {
    const subscription = watch(() => clearErrors()); // Limpiar errores al cambiar el formulario
    return () => subscription.unsubscribe();
  }, [watch, clearErrors]);

  const onSubmit = handleSubmit(async (data: UserLogin) => {
    try {
      setIsSubmitting(true);

      // Asignar la imagen predeterminada al formulario
      data.imagen = defaultImageUrl;

      // Registrar al usuario
      const success = await signup(data);
      if (success) {
        Toast.show({
          type: "success",
          text1: "Usuario registrado exitosamente",
        });
        setTimeout(() => navigation.navigate("Login"), 3000); // Redirigir al login después de 3 segundos
      }
    } catch (error) {
      Toast.show({ type: "error", text1: "Error al registrar usuario" });
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <ScrollView
      contentContainerStyle={{ padding: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Registro</Text>

      {/* Campo: Nombre de usuario */}
      <Text style={styles.label}>Nombre de usuario</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="account"
                size={20}
                color="#888"
                style={styles.icon}
              />
              <TextInput
                placeholder="Ingrese su nombre de usuario"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            </View>
          )}
          name="username"
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username?.message}</Text>
        )}
      </View>

      {/* Campo: Nombre */}
      <Text style={styles.label}>Nombre</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="account-circle"
                size={20}
                color="#888"
                style={styles.icon}
              />
              <TextInput
                placeholder="Ingrese su nombre"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            </View>
          )}
          name="name"
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {errors.name && (
          <Text style={styles.errorText}>{errors.name?.message}</Text>
        )}
      </View>

      {/* Campo: Apellido Paterno */}
      <Text style={styles.label}>Apellido Paterno</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="account-box"
                size={20}
                color="#888"
                style={styles.icon}
              />
              <TextInput
                placeholder="Ingrese su apellido paterno"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            </View>
          )}
          name="apellidoP"
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {errors.apellidoP && (
          <Text style={styles.errorText}>{errors.apellidoP?.message}</Text>
        )}
      </View>

      {/* Campo: Teléfono */}
      <Text style={styles.label}>Teléfono</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="phone"
                size={20}
                color="#888"
                style={styles.icon}
              />
              <TextInput
                placeholder="Ingrese su teléfono"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            </View>
          )}
          name="telefono"
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {errors.telefono && (
          <Text style={styles.errorText}>{errors.telefono?.message}</Text>
        )}
      </View>

      {/* Campo: Correo electrónico */}
      <Text style={styles.label}>Correo electrónico</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="email"
                size={20}
                color="#888"
                style={styles.icon}
              />
              <TextInput
                placeholder="Ingrese su correo electrónico"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            </View>
          )}
          name="email"
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email?.message}</Text>
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
                name="lock"
                size={20}
                color="#888"
                style={styles.icon}
              />
              <TextInput
                placeholder="Ingrese su contraseña"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
                secureTextEntry
              />
            </View>
          )}
          name="password"
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password?.message}</Text>
        )}
      </View>

      {/* Campo: Confirmar contraseña */}
      <Text style={styles.label}>Confirmar contraseña</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="lock-check"
                size={20}
                color="#888"
                style={styles.icon}
              />
              <TextInput
                placeholder="Confirme su contraseña"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
                secureTextEntry
              />
            </View>
          )}
          name="password2"
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {errors.password2 && (
          <Text style={styles.errorText}>{errors.password2?.message}</Text>
        )}
      </View>
      <Text style={styles.label}>Pregunta de seguridad</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="help-circle"
                size={20}
                color="#888"
                style={styles.icon}
              />
              {/* Componente Picker para seleccionar la pregunta de seguridad */}
              <Picker
                selectedValue={value}
                onValueChange={(itemValue) => onChange(itemValue)}
                style={styles.input}
              >
                <Picker.Item label="Seleccione una pregunta..." value="" />
                {questions.map((question) => (
                  <Picker.Item
                    key={question._id} // Usamos _id como clave única
                    label={question.pregunta} // Usamos pregunta como texto de la opción
                    value={question.pregunta} // Usamos _id como valor de la opción
                  />
                ))}
              </Picker>
            </View>
          )}
          name="pregunta" // Nombre del campo en tu formulario
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {errors.pregunta && (
          <Text style={styles.errorText}>{errors.pregunta?.message}</Text>
        )}
      </View>

      {/* Campo: Respuesta */}
      <Text style={styles.label}>Respuesta</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons
                name="comment-question"
                size={20}
                color="#888"
                style={styles.icon}
              />
              <TextInput
                placeholder="Ingrese su respuesta"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            </View>
          )}
          name="respuesta"
          rules={{ required: "Este campo es obligatorio" }}
          defaultValue=""
        />
        {errors.respuesta && (
          <Text style={styles.errorText}>{errors.respuesta?.message}</Text>
        )}
      </View>

      {/* Indicador de carga */}
      {isSubmitting && (
        <ActivityIndicator
          size="large"
          color="#3498db"
          style={{ marginVertical: 10 }}
        />
      )}

      {/* Botón de registro */}
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default RegisterScreen;