import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import axios from "axios";

const ItemDetailContainer = ({match}) => {
    let id = match.params.data;
    const [bici, SetBici] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios(`https://my-json-server.typicode.com/leandroagustin/api.json/array${id}`).then((res) =>
            SetBici(res.data))
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [id]);

    return (
        <>
            {IsLoading === false ? (
                <div>
                    {bici.map((e) => {
                        return (
                            <ItemDetail key={e.id} item={e} />
                        );
                    })}
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default ItemDetailContainer;
