import React, { useState, createContext, useContext } from 'react';

export const CartContext = createContext(); //Intermediario
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.some((dato) => dato.id === id);

    const addItemCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            const newCart = cart.map((cartElement) => {
                if (cartElement.id === item.id) {
                    return {
                        ...cartElement,
                        cantidad: cartElement.cantidad + cantidad,
                    };
                } else return cartElement;
            });
            return setCart(newCart);
        } else {
            setCart((e) => [...e, { ...item, cantidad }]);
        }
    };

    const removeItem = (itemId) => {
        // console.log("removeiteminside:", itemId);
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const clear = () => setCart([]);

    const totalItems = cart.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{ cart, clear, addItemCart, removeItem, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};