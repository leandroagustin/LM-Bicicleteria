import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import "./CardComponent.css";

const CardComponent = ({ name, description, img}) => (
  <Card className="Cards">
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardComponent;