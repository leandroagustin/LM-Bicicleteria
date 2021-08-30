import React, { useEffect, useState } from "react";
import axios from "axios";
//compoenentes
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from "../Loading/Loading";


const ItemDetailContainer = ({ match }) => {
    let id = match.params.id;

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setData(res.data));
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [id]);

    return (
        <>
            {
                isLoading ? <Loading /> : <ItemDetail Item={data} />
            }

        </>
    );
};

export default ItemDetailContainer;