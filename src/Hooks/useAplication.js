import axios from "axios";
import { useState, useEffect } from "react";

const Api = import.meta.env.VITE_REACT_APP_URL;

const useAplication = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener los datos del usuario
  const fetchUser = async () => {
    try {
      const res = await axios.get(`${Api}/user`);
      setUser(res.data[0]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error("Error al cargar el usuario:", err);
    }
  };

  // Cargar datos al inicializar
  useEffect(() => {
    fetchUser();
  }, []);

  // Función para refrescar los datos del usuario
  const refreshUserData = async () => {
    try {
      await fetchUser(); // Reutilizamos la lógica de `fetchUser`
    } catch (err) {
      console.error("Error al refrescar los datos del usuario:", err);
    }
  };

  return { user, loading, error, refreshUserData };
};

export default useAplication;
