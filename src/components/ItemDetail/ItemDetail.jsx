import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
const ItemDetail = ({ Item }) => {

    const [product, setProduct] = useState(0);
    //Creo la funcion onAdd
    const onAdd = (p) => {
        setProduct(p);
    };

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
                    <ItemCount
                        stock="5"
                        initial="0"
                        onAdd={onAdd}
                    />
                    {product > 0 && (
                        <Link to="/cart">
                            <Button variant="dark" className="mx-2">
                                Comprar ahora
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
};

export default ItemDetail;
