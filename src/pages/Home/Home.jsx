import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import User from "../../components/GetUser/User/User";
import useAplication from "../../Hooks/useAplication.js";

const Home = () => {
  const { user, loading, error, refreshUserData } = useAplication(); // Añadimos refreshUserData

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user: {error.message}</div>;
  }

  return (
    <div className="Home">
      <Header />
      <User user={user} refreshUserData={refreshUserData} />
      <Footer />
    </div>
  );
};

export default Home;
