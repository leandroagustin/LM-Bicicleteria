import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div className="greetingContainer">
            <h1>{props.title}</h1>
        </div>
    )
}

export default ItemListContainer;
