import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Screens
import HomeScreen from "./app/screens/public/HomeScreen";
import StackScreen from "./app/screens/StackScreen";
import LoginScreen from "./app/screens/public/LoginScreen";
import RegisterScreen from "./app/screens/public/RegisterScrenn";
import DetailsScreen from "./app/screens/public/DetailsScreen";
import CatalogScreen from "./app/screens/public/CatalogScreen";

const HomeStackNavigator = createNativeStackNavigator();
function MyStak() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
      <HomeStackNavigator.Screen
        name="Stack"
        component={StackScreen}
        options={{
          headerBackVisible: true, // Muestra solo la flecha "Back"
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

// Para la navegación de autenticación
const AuthStackNavigator = createNativeStackNavigator();

function AuthStack() {
  return (
    <AuthStackNavigator.Navigator initialRouteName="Login">
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

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{
          tabBarLabel: "Catalogo",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              color={color}
              size={size}
            />
          ),
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
