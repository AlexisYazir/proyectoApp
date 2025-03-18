import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "../../screens/public/HomeScreen";
import LoginScreen from "../../screens/public/LoginScreen";
import RegisterScreen from "../../screens/public/RegisterScreen";
import DetailsScreen from "../../screens/public/DetailsScreen";
import CatalogScreen from "../../screens/public/CatalogScreen";

// Para la stack de catálogo
const CatalogStackNavigator = createNativeStackNavigator();

export function CatalogStack() {
  return (
    <CatalogStackNavigator.Navigator
      initialRouteName="CatalogScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff6600",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <CatalogStackNavigator.Screen
        name="CatalogScreen"
        component={CatalogScreen}
        options={{ headerTitle: "Catálogo" }}
      />
      <CatalogStackNavigator.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ headerTitle: "Detalles del Producto" }}
      />
    </CatalogStackNavigator.Navigator>
  );
}

// Para la stack de inicio
const HomeStackNavigator = createNativeStackNavigator();

export function MyStak() {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff6600",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
      <HomeStackNavigator.Screen
        name="CatalogScreen"
        component={CatalogScreen}
        options={{
          headerBackVisible: true,
          headerTitle: "Catálogo de Productos",
          headerShadowVisible: true,
        }}
      />
      <HomeStackNavigator.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerBackVisible: true,
          headerTitle: "Detalles del Producto",
          headerShadowVisible: true,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

// Para la navegación de autenticación 
const AuthStackNavigator = createNativeStackNavigator();

export function AuthStack() {
  return (
    <AuthStackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff6600",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <AuthStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "Iniciar Sesión" }}
      />
      <AuthStackNavigator.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerTitle: "Registro" }}
      />
    </AuthStackNavigator.Navigator>
  );
}
