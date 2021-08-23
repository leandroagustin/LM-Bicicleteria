import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Item.css';

const item = ({ array }) => (
        <Card>
            <Image src={array.pictureUrl} wrapped ui='false' />
            <Card.Content  className='card-Content'>
                <Card.Header>{array.title}</Card.Header>
                <Card.Meta>
                    {array.id}
                </Card.Meta>
                <Card.Description className='card-Description'>
                    <span>Precio: ${array.price}</span>
                </Card.Description>
                <Card.Description>
                    <p>{array.description}</p>
                </Card.Description>
            </Card.Content>
        </Card>
    )

export default item;