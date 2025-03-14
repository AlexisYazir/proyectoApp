import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Text, Image, ScrollView } from "react-native";
import { RootStackParamList } from "./CatalogScreen";
import { styles2 } from "../../css/catalog";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "DetailsScreen">;

type Props = {
  route: DetailsScreenRouteProp;
};

const DetailsScreen = ({ route }: Props) => {
  const { producto } = route.params;

  return (
    <ScrollView contentContainerStyle={styles2.container}>
      <Image
        source={{
          uri: producto.imagenes?.[0] || "https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg",
        }}
        style={styles2.image}
        resizeMode="contain"
      />
      <Text style={styles2.productName}>{producto.nombre_producto}</Text>
      <Text style={styles2.price}>💲 {producto.precio}</Text>
      <Text style={styles2.description}>{producto.descripcion}</Text>
    </ScrollView>
  );
};

export default DetailsScreen;