import React, { useEffect, useState } from "react";
//compoenentes
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
//Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { Id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      const docs = [];
      const datos = await getDocs(collection(db, "productos"));
      datos.forEach((documento) => {
        docs.push({ ...documento.data() });
      });
      setData(docs.filter((e) => e.id === Id));
    };
    obtenerDatos();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [Id]);

  return <>{isLoading ? <Loading /> : <ItemDetail Item={data} />}</>;
};

export default ItemDetailContainer;
