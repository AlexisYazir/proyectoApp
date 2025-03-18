import React, { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, getQuestionsRequest, loginRequest } from "../api/auth";
import { UserLogin } from "../interfaces/UserLogin";
import { User } from "../interfaces/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Definir el tipo para el contexto
interface AuthContextType {
  user: UserLogin | null;
  isAuthenticated: boolean;
  signup: (user: User) => Promise<boolean>;
  signin: (user: UserLogin) => Promise<string | null>;
  logout: () => void;
  errors: string[];
  clearErrors: () => void;
  questions: any[];
  getQuestions: () => Promise<any[]>;
}

// Crear el contexto
export const AuthContext = createContext<AuthContextType | null>(null);

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserLogin | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);

  // Función para registrar un usuario
  const signup = async (user: User) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      return true; // Registro exitoso
    } catch (error: any) {
      if (error.response && Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      }
      //console.error("Error en el registro:", error);
      return false; // Registro fallido
    }
  };

  // Función para iniciar sesión
  const signin = async (user: UserLogin) => {
    try {
      const response = await loginRequest(user);
      //console.log("Respuesta del backend:", response.data);

      // Guardar el token y los datos del usuario en AsyncStorage
      await AsyncStorage.setItem("user", JSON.stringify(response.data));

      setUser(response.data);
      setIsAuthenticated(true);

      return response.data.rol;
    } catch (error: any) {
      //console.error("Error al iniciar sesión:", error.response?.data?.message);
      setErrors([error.response?.data?.message || "Error al iniciar sesión"]);
      setIsAuthenticated(false);
      return null;
    }
  };

  // Función para cerrar sesión
  const logout = async () => {
    await AsyncStorage.removeItem("user");

    setIsAuthenticated(false);
    setUser(null);
  };

  // Función para obtener las preguntas
  const getQuestions = async () => {
    try {
      const res = await getQuestionsRequest();
      setQuestions(res.data);
      return res.data;
    } catch (error) {
      console.error("Error al obtener las preguntas:", error);
      return [];
    }
  };

  // Función para limpiar errores
  const clearErrors = () => {
    setErrors([]);
  };

  // Verificar si el usuario está autenticado al cargar la aplicación
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");

        if (userData) {
          // Si hay un token y datos de usuario, asumir que el usuario está autenticado
          setUser(JSON.parse(userData));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error al verificar autenticación:", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  // Valor del contexto
  const value = {
    user,
    isAuthenticated,
    signup,
    signin,
    logout,
    errors,
    clearErrors,
    questions,
    getQuestions,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};