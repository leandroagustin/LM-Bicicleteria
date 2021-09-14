import React, { useEffect, useState } from "react";
//compoenentes
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
//Firebase
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { Id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const obtenerDatos = async () => {
    const docRef = doc(db, "productos", Id);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.id);
    setData({ ...docSnap.data(), id: docSnap.id });
  };

  useEffect(() => {
    obtenerDatos();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [Id]);

  return <>{isLoading ? <Loading /> : <ItemDetail Item={data} />}</>;
};

export default ItemDetailContainer;
