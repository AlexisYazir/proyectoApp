import { useState } from "react";
import { getProductsRequest } from "../api/products";
import { Product } from "../interfaces/Product"; // Asegúrate de importar la interfaz correctamente

// Controlador para manejar todas las peticiones relacionadas con los productos
export function useProductController() {
  const [products, setProducts] = useState<Product[]>([]); // Definir tipo de estado
  const [errors, setErrors] = useState<string[]>([]); // Tipo de errores

  const getProducts = async () => {
    try {
      const res = await getProductsRequest();
      setProducts(res.data);
    } catch (error: any) {
      if (error.response && Array.isArray(error.response.data)) {
        setErrors(error.response.data); // Ahora `error.response.data` es un array
      } else {
        setErrors(["Error al obtener productos. Verifique su conexión."]);
      }
      console.error("Error al obtener productos:", error);
    }
  };

  const clearErrors = () => {
    setErrors([]);
  };

  return {
    products,
    getProducts,
    clearErrors,
    errors,
  };
}
