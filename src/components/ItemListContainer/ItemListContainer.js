import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    return (
        <div className="greetingContainer">
            <h1>{props.title}</h1>
            <ItemCount stock="5"/>
        </div>
    )
}

export default ItemListContainer;
