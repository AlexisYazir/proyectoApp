import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#D35400", // Naranja oscuro
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E67E22", // Naranja medio
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#fff",
    marginBottom: 20, // Aumenta la separación entre los inputs
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 5,
  },
  errorText: {
    fontSize: 14,
    color: "red",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#E67E22", // Naranja medio
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#D35400",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonPress: {
    transform: [{ scale: 0.95 }], // Efecto de escala al presionar
  },
  linkText: {
    color: "#D35400",
    fontSize: 16,
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 15,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
});
