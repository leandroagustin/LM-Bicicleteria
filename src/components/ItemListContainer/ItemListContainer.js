import React from 'react'
import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount';
// import ItemList from '../ItemList.js/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
// import ItemDetail from '../ItemDetail/ItemDetail';

const ItemListContainer = ({ title }) => {
    return (
        <>
            <div className="greetingContainer">
                <h1>{title}</h1>
                {/* <ItemCount stock="5" initial="0" /> */}
            </div>
            <div className='ItemList'>
                {/* <ItemList /> */}
                <ItemDetailContainer/>
            </div>
        </>
    )
}

export default ItemListContainer;
