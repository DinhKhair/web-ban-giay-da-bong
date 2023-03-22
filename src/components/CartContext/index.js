import { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [Carts, setCarts] = useState(JSON.parse(localStorage.getItem('carts')) || []);
    useEffect(() => {
        localStorage.setItem('carts', JSON.stringify(Carts));
    }, [Carts]);
    const quantity = 1;
    const addCart = (id, image, name, price) => {
        setCarts([...Carts, { id, image, name, price, quantity }]);
    };
    const deleteCart = (index) => {
        Carts.splice(index, 1);
        localStorage.setItem('carts', JSON.stringify(Carts));
        setCarts([...Carts]);
    };
    const btnIncrease = (index, id, image, name, price, quantity) => {
        Carts[index] = {
            id: id,
            image: image,
            name: name,
            price: price,
            quantity: quantity + 1,
        };
        localStorage.setItem('carts', JSON.stringify(Carts));
        setCarts([...Carts]);
    };
    const btnReduced = (index, id, image, name, price, quantity) => {
        if (quantity <= 1) {
            Carts[index] = {
                id: id,
                image: image,
                name: name,
                price: price,
                quantity: (quantity = 1),
            };
        } else {
            Carts[index] = {
                id: id,
                image: image,
                name: name,
                price: price,
                quantity: quantity - 1,
            };
        }
        localStorage.setItem('carts', JSON.stringify(Carts));
        setCarts([...Carts]);
    };
    return (
        <CartContext.Provider value={{ Carts, addCart, deleteCart, btnIncrease, btnReduced }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
