import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { CatalogStack } from "../stacks/publicStacks";
import { AuthStack } from "../stacks/publicStacks";
import { MyStak } from "../stacks/publicStacks";

// Tab PUBLICA
const Tab = createBottomTabNavigator();

export function MyTabs() {
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