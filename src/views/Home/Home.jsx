import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
//Style
import "./Home.css";
const Home = () => {
  return (
    <div className="ItemListContainer">
      <ItemListContainer title="Bienvenidos! aquí encontraran bicicletas de Paseo, MTB y Eléctricas, por el mejor precio y calidad." />
    </div>
  );
};
export default Home;
