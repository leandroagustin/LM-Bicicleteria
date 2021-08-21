import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css'

const ItemDetailContainer = ({ item }) => {
    return (
        <>
            <div className="itemDetailContainer">
                <div>
                    <h1>{item.title}</h1>
                    <img src={item.pictureUrl} alt="Conor Java"></img>
                    <p><b>Descripcion:</b> {item.descriptionSecondary}</p>
                    <p><b>Categoria:{item.category}</b></p>
                </div>
                <div>
                    <span><b>Precio: € {item.price}</b></span>
                    <ItemCount stock="5" initial="0"/>
                </div>
            </div>
        </>
    )
};

export default ItemDetailContainer;
