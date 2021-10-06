import React, { useEffect, useState } from "react";
//compoenentes
import ItemDetail from "../ItemDetail/ItemDetail";
import Lottie from "../Lottie/Lottie";
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
    setData({ ...docSnap.data(), id: docSnap.id });
    setIsLoading(false);
  };

  useEffect(() => {
    obtenerDatos();
  }, [Id]);

  return (
    <>
      {" "}
      {isLoading ? (
        <div
          style={{
            height: "520px",
            width: "550px",
            margin: "250px 668px",
          }}
        >
          <Lottie />
        </div>
      ) : (
        <ItemDetail Item={data} />
      )}
    </>
  );
};

export default ItemDetailContainer;
