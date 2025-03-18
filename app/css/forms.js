import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f4f6", // Fondo más suave para una apariencia moderna
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
    color: "#2C3E50", // Color más oscuro para el título
    letterSpacing: 1.5,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#34495E", // Color más suave para las etiquetas
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 18,
    width: '100%',
  },
  icon: {
    marginRight: 12,
    color: "#2C3E50", // Iconos de color neutro
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#34495E",
    paddingVertical: 0,
    paddingLeft: 10,
  },
  inputFocused: {
    borderColor: "#D35400", // Color de borde al enfocar
  },
  errorText: {
    fontSize: 14,
    color: "#E74C3C", // Rojo más fuerte para errores
    fontWeight: "600",
    paddingTop: 4,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#D35400", // Naranja brillante para el botón
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    elevation: 6,
    shadowColor: "#E74C3C",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    transition: 'all 0.3s ease', // Suaviza el cambio visual del botón
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  buttonPress: {
    transform: [{ scale: 0.98 }], // Efecto de escala al presionar
  },
  linkText: {
    color: "#2980B9", // Azul para el enlace
    fontSize: 16,
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 20,
  },
  imagePreview: {
    width: 120,
    height: 120,
    borderRadius: 15,
    alignSelf: "center",
    marginVertical: 15,
  },
});


export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
