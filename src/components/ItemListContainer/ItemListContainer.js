import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList.js/ItemList';

const ItemListContainer = ({ title }) => {
    return (
        <>
            <div className="greetingContainer">
                <h1>{title}</h1>
                <ItemCount stock="5" initial="0" />
            </div>
            <div className='ItemList'>
                <h2>Productos Nuevos:</h2>
                <ItemList />
            </div>
        </>
    )
}

export default ItemListContainer;
