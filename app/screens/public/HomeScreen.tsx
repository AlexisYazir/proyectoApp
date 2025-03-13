import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Definir el tipo de las rutas disponibles
type RootStackParamList = {
  Stack: undefined;  // Asegúrate de que la ruta "Stack" está definida
};

export const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
      <View>
        <Text>Home Screen app</Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate("Stack")}  // Ahora sí reconoce "Stack"
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
            marginTop: 10
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Presionar</Text>
        </TouchableOpacity>
      </View>
    );
}

export default HomeScreen;
