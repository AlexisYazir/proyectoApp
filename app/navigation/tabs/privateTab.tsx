import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { DashboardStack } from "../stacks/privateStacks";
import { HomeDashboardStack } from "../stacks/privateStacks";
import { UserCatalogStack } from "../stacks/privateStacks";

// Tab PRIVADA
const TabAuth = createBottomTabNavigator();

export function AuthTabs() {
  return (
    <TabAuth.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#ff6600",
      }}
    >
      <TabAuth.Screen
        name="Catalogo"
        component={UserCatalogStack}
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

      <TabAuth.Screen
        name="Home"
        component={HomeDashboardStack}
        options={{
          tabBarLabel: "Dashboard",
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
      <TabAuth.Screen
        name="Auth"
        component={DashboardStack}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </TabAuth.Navigator>
  );
}