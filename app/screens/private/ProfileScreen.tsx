import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { estilos } from "../../css/forms";
import { useAuth } from "../../controller/userController";

export default function ProfileScreen() {
  const { user } = useAuth();

  // States para los datos del usuario
  const [username, setUsername] = useState(user?.username || "");
  const [name, setName] = useState(user?.name || "");
  const [apellidoP, setApellidoP] = useState(user?.apellidoP || "");
  const [email, setEmail] = useState(user?.email || "");
  const [telefono, setTelefono] = useState(user?.telefono || "");
  const [imagen, setImagen] = useState(user?.imagen || "");

  // Función para manejar el cancelado
  const handleCancel = () => {
    setUsername(user?.username || "");
    setName(user?.name || "");
    setApellidoP(user?.apellidoP || "");
    setEmail(user?.email || "");
    setTelefono(user?.telefono || "");
    setImagen(user?.imagen || "");
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Editar Perfil</Text>

      <TextInput
        style={estilos.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Usuario"
      />
      <TextInput
        style={estilos.input}
        value={name}
        onChangeText={setName}
        placeholder="Nombre"
      />
      <TextInput
        style={estilos.input}
        value={apellidoP}
        onChangeText={setApellidoP}
        placeholder="Apellido Paterno"
      />
      <TextInput
        style={estilos.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Correo Electrónico"
      />
      <TextInput
        style={estilos.input}
        value={telefono}
        onChangeText={setTelefono}
        placeholder="Teléfono"
        keyboardType="phone-pad"
      />
      <TextInput
        style={estilos.input}
        value={imagen}
        onChangeText={setImagen}
        placeholder="Imagen (URL)"
      />

      <TouchableOpacity
        style={estilos.button}
        onPress={() => alert("¡Perfil actualizado!")}
      >
        <Text style={estilos.buttonText}>Actualizar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.cancelButton}
        onPress={handleCancel}
      >
        <Text style={estilos.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
