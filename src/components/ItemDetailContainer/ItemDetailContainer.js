import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import axios from 'axios';
const ItemDetailContainer = () => {
    const [bici, SetBicis] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios('https://my-json-server.typicode.com/leandroagustin/api.json/array'
        ).then(res => SetBicis(res.data))
            
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
