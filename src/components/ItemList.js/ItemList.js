import React, { useEffect, useState } from 'react';
import Item from '../Item.js/Item';
const ItemList = () => {
    const [bici, SetBicis] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(json => SetBicis(json))
    }, [])

    return (
        <div className='ItemList'>
            {bici.map((e) => {
                return <Item key={e.id} array={e} />
            })}
        </div>
    );
};

export default ItemList;