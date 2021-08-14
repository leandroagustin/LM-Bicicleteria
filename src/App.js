import React, { Component } from "react";
import "./App.css";

//components
import Header from "./components/Header/Header";
import "./components/Header/Header.css";
import CardComponent from "./components/CardComponent/CardComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="LM Bicicleteria" />
        <ItemListContainer title="¡Bienvenidos mi tienda online!" />
        <div className="CardContainer">
          <CardComponent
            name="Megamo Kinetic 2021"
            description="Bicicleta de aluminio de asistencia eléctrica al pedaleo Megamo Kinetic, con batería integrada en el cuadro de 418 Wh, horquilla de suspensión Suntour de 100 mm de recorrido, transmisión Shimano Altus de 8 velocidades y frenos de disco hidráulicos shimano para uso Recreativo."
            img="https://cdn.mammothbikes.com/ProductImages/list/424683.png"
          />
          {/* <CardComponent
            name="Conor Java 29 2021"
            description="Bicicleta de aluminio Conor Java 29, de asistencia eléctrica al pedaleo con batería de 504 Wh, y transmisión de 9 velocidades para uso Recreativo."
            img="https://cdn.mammothbikes.com/ProductImages/list/426970.jpeg"
          />
          <CardComponent
            name="Specialized Turbo Levo HT 29 2021"
            description="Bicicleta de aluminio Turbo Levo HT, de asistencia eléctrica al pedaleo con motor Specialized 1.2 E, suave, eficiente y silencioso y batería de 400 Wh. Viene equipada con transmisión Shimano de 9 velocidades, frenos de disco hidráulicos y horquilla SR Suntour de 100 mm de recorrido para uso Trail."
            img="https://cdn.mammothbikes.com/ProductImages/list/335294.jpg"
          />
          <CardComponent
            name="GT Epantera Dash 29 2020"
            description="La Pantera GT-E presenta un estilo icónico Triple Triangle ™ y la asistencia de Shimano STePS para brindar a los ciclistas la ventaja que necesitan para ir más lejos y más rápido cuando estás en tus senderos favoritos."
            img="https://cdn.mammothbikes.com/ProductImages/list/348378.jpg"
          />
          <CardComponent
            name="Ghost E-Teru Essential 27 2021"
            description="La bicicleta con cuadro de aluminio E-Teru Essential, es de asistencia eléctrica al pedaleo tiene batería Bosch de 500 Wh. Además viene equipada con transmisión Shimano de 9 velocidades, frenos hidráulicos Tektro y horquilla Suntour XCM. Pensada para largos recorridos y desplazamientos rápidos, asfalto liso y rutas offroad: La E-Teru es una verdadera all-rounder."
            img="https://cdn.mammothbikes.com/ProductImages/list/462725.png"
          />
          <CardComponent
            name="Corratec E-Power X Vert Race 2021"
            description="Bicicleta Corratec E-Power X Vert Race, de asistencia eléctrica al pedaleo con batería Bosch Power Tube 500wh, lleva rueda trasera de 27,5 y delantera en 29, transmisión Sram SX de 12 velocidades y frenos Tektro para uso Recreativo."
            img="https://cdn.mammothbikes.com/ProductImages/list/_0_459360.jpg"
          />
          <CardComponent
            name="Conor Nepal E-Mtb 27,5 2022"
            description="Bicicleta de asistencia eléctrica al pedaleo Nepal E-Mtb 27,5, viene equipada con Motor BAFANG RM 250 y batería dede 504 Wh, para uso Recreativo."
            img="https://cdn.mammothbikes.com/ProductImages/list/472025.jpg"
          /> */}
        </div>
      </div>
    );
  }
}
export default App;