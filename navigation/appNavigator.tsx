import React, { useContext } from "react";
import { useAuth } from "../app/controller/userController"; // Importar useAuth
import Navigation from "./Navigation"; // Navegación para usuarios autenticados
import AuthNavigation from "./AuthNavigation"; // Navegación para usuarios no autenticados
const AppNavigator = () => {
  const { isAuthenticated } = useAuth(); // Obtener el estado de autenticación

  return isAuthenticated ? <AuthNavigation /> : <Navigation />;
};

export default AppNavigator;