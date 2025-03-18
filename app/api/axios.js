import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'https://api-web-5.vercel.app/api',
  withCredentials: true, // Esto no es necesario en React Native
});

// Interceptor para agregar el token a las solicitudes
instance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    config.headers.Cookie = `token=${token}`; // Simular una cookie
  }

  return config;
});

export default instance;