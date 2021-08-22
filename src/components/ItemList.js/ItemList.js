import React, { useEffect, useState } from 'react';
import Item from '../Item.js/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//Spinner
import Loading from '../Loading/Loading';
//React-Router-DOM
import { Link } from "react-router-dom";
const ItemList = () => {
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
 console.log(IsLoading);
    return (
        <> {IsLoading === false ? (
            <div>
                {bici.map((e) => {
                    return (
                        <div key={e.id} className="">
                            <Link to={`/detail/${e.id}`}>
                                <Item key={e.id} array={e} title={e.title} />
                            </Link>
                        </div>
                    );
                })}
            </div>
        ) :
            <Loading />}
        </>
    );
};

export default ItemList;