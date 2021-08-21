import React, { useEffect, useState } from 'react';
import Item from '../Item.js/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
//Spinner
import Loading from '../Loading/Loading';
const ItemList = () => {
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
        <> {IsLoading === false ? (
            <div div className='ItemList'>
                {bici.map((e) => {
                    return <Item key={e.id} array={e} />
                })}
            </div>
        ) :
            <Loading />}
        </>
    );
};

export default ItemList;