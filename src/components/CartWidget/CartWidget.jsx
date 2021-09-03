import React from 'react';
import "./CartWidget.css";

import { useCartContext } from '../../cart/CartContext';

import { Button, Icon } from 'semantic-ui-react'

const CartWidget = () => {

    const { totalItems } = useCartContext();

    return (

        <>
            {/* <p className="number-cart ">{totalItems}</p> */}
            <Button animated='vertical'>
                <Button.Content hidden>{totalItems}</Button.Content>
                <Button.Content visible>
                    <Icon name='shop' />
                </Button.Content>
            </Button>
        </>
    )
}

export default CartWidget;