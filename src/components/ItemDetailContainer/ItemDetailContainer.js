import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
const ItemDetailContainer = () => {
    const [bici, SetBicis] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/leandroagustin/api.json/array')
            .then(response => response.json())
            .then(json => SetBicis(json))
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {IsLoading === false ? (
                <div>
                    {bici.map((e) => {
                        return <ItemDetail key={e.id} item={e} title={e.title}/>
                    })}
                </div>
            ) :
                <Loading />}
        </>
    )
}

export default ItemDetailContainer;
