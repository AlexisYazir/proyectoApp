import { MyTabs } from "../app/navigation/tabs/publicTab";
import { NavigationContainer } from "@react-navigation/native";

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}