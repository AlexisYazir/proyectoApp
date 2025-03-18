import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../../screens/private/DashboardScreen";
import HomeScreenUser from "../../screens/private/HomeScreenUser";
import CatalogScreen from "../../screens/public/CatalogScreen";
import DetailsScreen from "../../screens/public/DetailsScreen";
import ProfileScreen from "../../screens/private/ProfileScreen";
import { useAuth } from "../../controller/userController"; // Importa el hook useAuth
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native"; // Importa TouchableOpacity

// Para la stack dashboard
const DashboardStackNavigator = createNativeStackNavigator();

export function DashboardStack() {
  const { logout } = useAuth(); // Obtén la función logout del contexto

  return (
    <DashboardStackNavigator.Navigator
      initialRouteName="DashboardScreen"
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
      <DashboardStackNavigator.Screen
        name="DashboardScreen"
        component={ProfileScreen}
        options={{
          headerTitle: "Perfil",
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <MaterialCommunityIcons
                name="logout" // Icono de salida
                size={30}
                color="white"
                style={{ marginRight: 10 }} // Puedes ajustar el margen si lo necesitas
              />
            </TouchableOpacity>
          ),
        }}
      />
      <DashboardStackNavigator.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: "Perfil",
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <MaterialCommunityIcons
                name="logout" // Icono de salida
                size={30}
                color="white"
                style={{ marginRight: 10 }} // Puedes ajustar el margen si lo necesitas
              />
            </TouchableOpacity>
          ),
        }}
      />
    </DashboardStackNavigator.Navigator>
  );
}

// Para la stack de inicio
const HomeDashboardStackNavigator = createNativeStackNavigator();

export function HomeDashboardStack() {
  const { logout } = useAuth(); // Obtén la función logout del contexto

  return (
    <HomeDashboardStackNavigator.Navigator
      initialRouteName="HomeScreenUser"
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
      <HomeDashboardStackNavigator.Screen
        name="HomeScreenUser"
        component={HomeScreenUser}
        options={{
          headerTitle: "Dashboard",
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <MaterialCommunityIcons
                name="logout" // Icono de salida
                size={30}
                color="white"
                style={{ marginRight: 10 }} // Puedes ajustar el margen si lo necesitas
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeDashboardStackNavigator.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          headerTitle: "Dashboard",
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <MaterialCommunityIcons
                name="logout" // Icono de salida
                size={30}
                color="white"
                style={{ marginRight: 10 }} // Puedes ajustar el margen si lo necesitas
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeDashboardStackNavigator.Screen
        name="CatalogScreen"
        component={CatalogScreen}
        options={{
          headerBackVisible: true,
          headerTitle: "Catálogo de Productos",
          headerShadowVisible: true,
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <MaterialCommunityIcons
                name="logout" // Icono de salida
                size={30}
                color="white"
                style={{ marginRight: 10 }} // Puedes ajustar el margen si lo necesitas
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeDashboardStackNavigator.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerBackVisible: true,
          headerTitle: "Detalles del Producto",
          headerShadowVisible: true,
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <MaterialCommunityIcons
                name="logout" // Icono de salida
                size={30}
                color="white"
                style={{ marginRight: 10 }} // Puedes ajustar el margen si lo necesitas
              />
            </TouchableOpacity>
          ),
        }}
      />
    </HomeDashboardStackNavigator.Navigator>
  );
}

// Para la stack de inicio
const UserCatalogStackNavigator = createNativeStackNavigator();

export function UserCatalogStack() {
  const { logout } = useAuth(); // Obtén la función logout del contexto

  return (
    <UserCatalogStackNavigator.Navigator
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
      <HomeDashboardStackNavigator.Screen
        name="CatalogScreen"
        component={CatalogScreen}
        options={{
          headerBackVisible: true,
          headerTitle: "Catálogo de Productos",
          headerShadowVisible: true,
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <MaterialCommunityIcons
                name="logout" // Icono de salida
                size={30}
                color="white"
                style={{ marginRight: 10 }} // Puedes ajustar el margen si lo necesitas
              />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeDashboardStackNavigator.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerBackVisible: true,
          headerTitle: "Detalles del Producto",
          headerShadowVisible: true,
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <MaterialCommunityIcons
                name="logout" // Icono de salida
                size={30}
                color="white"
                style={{ marginRight: 10 }} // Puedes ajustar el margen si lo necesitas
              />
            </TouchableOpacity>
          ),
        }}
      />
    </UserCatalogStackNavigator.Navigator>
  );
}
