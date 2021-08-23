import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
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

    return (
        <>
            {IsLoading === false ? (
                <div className='divCardContainer'>
                    {bici.map((e) => {
                        return (
                            <div key={e.id}>
                                <Link to={`/Item/${e.id}`}>
                                    <Item array={e} />
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