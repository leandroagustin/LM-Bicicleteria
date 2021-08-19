import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const item = ({ array }) => (

    <div className='CardContainer'>
        <Card>
            <Image src={array.avatar_url} wrapped ui='false' />
            <Card.Content>
                <Card.Header>{array.login}</Card.Header>
                <Card.Meta>
                    {array.id}
                </Card.Meta>
                <Card.Description>
                    <p>{array.html_url}</p>
                </Card.Description>
            </Card.Content>
        </Card></div>

)

export default item;