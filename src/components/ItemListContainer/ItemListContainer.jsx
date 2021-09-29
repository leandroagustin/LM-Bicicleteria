import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { Image } from "react-bootstrap";
const ItemListContainer = ({ title }) => {
  return (
    <>
      <div className="divContainer">
        <h3 className="h1 brand bienvenida-h3 text-center bg-dark shadow-lg">
          ¡Bienvenidos mi tienda online!
        </h3>
        <Image
          className="img"
          src="https://images.unsplash.com/photo-1524851037027-92da154aba10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="Bici"
          fluid
        />
      </div>

      <h1 className="greetingContainer text-center bg-dark">{title}</h1>
      <div className="itemListContainer">
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
