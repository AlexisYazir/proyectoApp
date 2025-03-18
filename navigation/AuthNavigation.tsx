import { AuthTabs } from "../app/navigation/tabs/privateTab";
import { NavigationContainer } from "@react-navigation/native";

export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <AuthTabs />
    </NavigationContainer>
  );
}