import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import User from "../../components/GetUser/User/User";
import useAplication from "../../Hooks/useAplication.js";

const Home = () => {
  const { user, loading, error, refreshUserData } = useAplication(); // Añadimos refreshUserData
  const [img, setImg] = useState();

  if (loading) {
    return (
      <div className="LoadingScreen">
        <div className="LoadingSpinner">
          <div className="Spinner"></div>
        </div>
        <p className="LoadingText">Cargando datos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ErrorScreen">
        <p className="ErrorMessage">
          Hubo un error al cargar los datos: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="Home">
      <Header data={img} />
      <User setImg={setImg} user={user} refreshUserData={refreshUserData} />
      <Footer />
    </div>
  );
};

export default Home;
