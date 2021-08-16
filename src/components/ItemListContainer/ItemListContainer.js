import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({title}) => {
    return (
        <div className="greetingContainer">
            <h1>{title}</h1>
            <ItemCount stock="5" initial="0"/>
        </div>
    )
}

export default ItemListContainer;
