import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css'

const ItemDetail = ({ Item }) => {
    return (
        <>
            <div className="itemDetail">
                <div className='itemDetailcontent'>
                    <h1>{Item.title}</h1>
                    <img className='itemDeailImg' src={Item.image} alt="Conor Java"></img>
                    <p><b>Descripcion: </b> {Item.description}</p>
                    <p><b>Categoria: {Item.category}</b></p>
                    <span><b>Precio: € {Item.price}</b></span>
                </div>
                <div className='itemDetailItemCount'>
                    <ItemCount stock="5" initial="0" />
                </div>
            </div>
        </>
    )
};

export default ItemDetail;
