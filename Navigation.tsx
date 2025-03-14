import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Screens
import HomeScreen from "./app/screens/public/HomeScreen";
import LoginScreen from "./app/screens/public/LoginScreen";
import RegisterScreen from "./app/screens/public/RegisterScreen";
import DetailsScreen from "./app/screens/public/DetailsScreen";
import CatalogScreen from "./app/screens/public/CatalogScreen";

// Para la stack de catálogo
const CatalogStackNavigator = createNativeStackNavigator();

function CatalogStack() {
  return (
    <CatalogStackNavigator.Navigator
      initialRouteName="CatalogScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff6600", // Color naranja
        },
        headerTintColor: "#fff", // Color del texto del encabezado
        headerTitleStyle: {
          fontWeight: "bold", // Estilo del texto del encabezado
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

function MyStak() {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff6600", // Color naranja
        },
        headerTintColor: "#fff", // Color del texto del encabezado
        headerTitleStyle: {
          fontWeight: "bold", // Estilo del texto del encabezado
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

function AuthStack() {
  return (
    <AuthStackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff6600", // Color naranja
        },
        headerTintColor: "#fff", // Color del texto del encabezado
        headerTitleStyle: {
          fontWeight: "bold", // Estilo del texto del encabezado
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

// Navegación de pestañas
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#ff6600",
      }}
    >
      <Tab.Screen
        name="Catalogo"
        component={CatalogStack}
        options={{
          tabBarLabel: "Catálogo",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Home"
        component={MyStak}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Auth"
        component={AuthStack}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}