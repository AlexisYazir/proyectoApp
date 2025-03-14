import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";
import { useProductController } from "../../controller/productController";
import { styles } from "../../css/catalog";

export type RootStackParamList = {
  CatalogScreen: undefined;
  DetailsScreen: { producto: any };
};

export const CatalogScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { products, getProducts, errors } = useProductController();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    await getProducts();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2a9d8f" />
        <Text style={styles.loadingText}>Cargando productos...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            source={{ uri: item.imagenes?.[0] || "https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg" }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={styles.productName}>{item.nombre_producto}</Text>
            <Text style={styles.price}>💲 {item.precio}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("DetailsScreen", { producto: item })}
            >
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      ListEmptyComponent={
        <View>
          <Text style={styles.errorText}>No se pudieron obtener los productos. Inténtalo más tarde.</Text>
          <TouchableOpacity style={styles.button} onPress={fetchData}>
            <Text style={styles.buttonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
};

export default CatalogScreen;