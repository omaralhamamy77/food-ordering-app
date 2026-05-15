import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (meal) => {
        setCartItems(prev => {
            const exists = prev.find(item => item.idMeal === meal.idMeal);
            if (exists) {
                return prev.map(item =>
                    item.idMeal === meal.idMeal
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...meal, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.idMeal !== id));
    };

    const clearCart = () => setCartItems([]);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);