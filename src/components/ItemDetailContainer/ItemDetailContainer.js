import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import axios from "axios";
//React-Router-DOM
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
    const [bici, SetBicis] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios(
            "https://my-json-server.typicode.com/leandroagustin/api.json/array"
        ).then((res) => SetBicis(res.data));

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {IsLoading === false ? (
                <div>
                    {bici.map((e) => {
                        return (
                            <div key={e.id} className="">
                                <Link to={`/detail/${e.id}`}>
                                    <ItemDetail key={e.id} item={e} title={e.title} />
                                </Link>
                            </div>
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
