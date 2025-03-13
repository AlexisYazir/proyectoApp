import React, { useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import Toast from "react-native-toast-message";
import { useProductController } from "../../controller/productController"; // Ajusta la ruta

export const CatalogScreen = () => {
  const { products, getProducts, errors } = useProductController();

  useEffect(() => {
    getProducts();
  }, []);

  // Mostrar alertas si hay errores
  useEffect(() => {
    if (errors.length > 0) {
      errors.forEach((error) => {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error,
          position: "top",
          visibilityTime: 4000,
          autoHide: true,
        });
      });
    }
  }, [errors]);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            source={{ uri: item.imagenes?.[0] || "https://via.placeholder.com/150" }} // Primera imagen o una imagen por defecto
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.productName}>{item.nombre_producto}</Text>
          <Text style={styles.price}>💲 {item.precio}</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log("Ver producto", item)}>
            <Text style={styles.buttonText}>Ver</Text>
          </TouchableOpacity>
        </View>
      )}
      ListHeaderComponent={
        <Text style={styles.title}>Catálogo de Productos</Text>
      }
      ListEmptyComponent={
        <Text style={styles.errorText}>No se pudieron obtener los productos. Inténtalo más tarde.</Text>
      }
    />
  );
};

export default CatalogScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2a9d8f",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2a9d8f",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
