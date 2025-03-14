import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

type TabParamList = {
  Home: undefined;
  CatalogScreen: undefined;
  Auth: undefined;
};

export const Banner = () => {
    const navigation = useNavigation<BottomTabNavigationProp<TabParamList>>();

    return (
        <View style={styles.bannerPet}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titlePet}>
                            🐾 ¡Bienvenido a Huellitas Shop!
                        </Text>
                        <Text style={styles.subtitlePet}>
                            Todo lo que tus mascotas necesitan en un solo lugar.
                        </Text>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => navigation.navigate("CatalogScreen")}>
                            <Text style={styles.buttonText}>Explorar Productos →</Text>
                        </TouchableOpacity>
                    </View>
                    <Image 
                        source={require("../../assets/img-baner.webp")} 
                        style={styles.petImage} 
                        resizeMode="contain" 
                    />
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    bannerPet: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f8f9fa"
    },
    container: {
        width: "100%",
    },
    content: {
        flexDirection: "column",
        alignItems: "center",
    },
    textContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    titlePet: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitlePet: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#ff6600",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    petImage: {
        width: 200,
        height: 200,
    },
});

export default Banner;