import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Banner from "../../components/Banner";
// Definir el tipo de las rutas disponibles
type RootStackParamList = {
  Stack: undefined;  // Asegúrate de que la ruta "Stack" está definida
  DetailsScreen: { producto: any };
};

export const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
     
      <>
      <Banner/>
      </>
    );
}

export default HomeScreen;