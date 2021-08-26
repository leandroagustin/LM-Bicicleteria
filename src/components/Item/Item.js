import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Item.css';

const Item = ({ array }) => (
        <Card>
        <Image className='cardImage' src={array.image} />
            <Card.Content  className='card-Content'>
            <Card.Header className='CardHeader'>{array.title}</Card.Header>
                <Card.Description className='card-Description'>
                <span>{array.category}</span>
                </Card.Description>
                <Card.Description>
                <p>Precio: € {array.price}</p>
                </Card.Description>
            </Card.Content>
        </Card>
    )

export default Item;