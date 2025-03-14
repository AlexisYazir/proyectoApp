import { useState } from "react";
import { registerRequest, getQuestionsRequest } from "../api/auth";
import { User } from "../interfaces/User"; // Asegúrate de importar la interfaz correctamente

// Controlador para manejar todas las peticiones relacionadas con los productos
export function useProductController() {
  const [user, setUser] = useState<User[]>([]); // Definir tipo de estado
  const [errors, setErrors] = useState<string[]>([]); // Tipo de errores

  const signup = async (user: User) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      return true; // Registro exitoso
    } catch (error: any) {
      if (error.response && Array.isArray(error.response.data)) {
        setErrors(error.response.data); // Ahora `error.response.data` es un array
      } 
      console.error("Error register", error);
    }
  };

  const [questions, setQuestions] = useState([]);

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

  const clearErrors = () => {
    setErrors([]);
  };

  return {
    user,
    signup,
    clearErrors,
    errors,
    questions,
    getQuestions
  };
}
