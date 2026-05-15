import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Cart = () => {
    const { cartItems, removeFromCart, clearCart, totalItems } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <CartContainer>
                <h2 style={{ color: '#ff6b35', textAlign: 'center' }}>🛒 Your Cart</h2>
                <p className="text-center text-muted">Your cart is empty!</p>
                <div className="text-center">
                    <button
                        className="btn"
                        style={{ backgroundColor: '#ff6b35', color: 'white', borderRadius: '10px' }}
                        onClick={() => navigate('/menu')}
                    >
                        Go to Menu 🍽️
                    </button>
                </div>
            </CartContainer>
        );
    }

    return (
        <CartContainer>
            <h2 style={{ color: '#ff6b35', textAlign: 'center' }}>🛒 Your Cart</h2>

            {cartItems.map(item => (
                <CartItem key={item.idMeal}>
                    <img
                        src={item.strMealThumb}
                        alt={item.strMeal}
                        style={{ width: '80px', height: '80px', borderRadius: '10px', objectFit: 'cover' }}
                    />
                    <div style={{ flex: 1 }}>
                        <h5 style={{ margin: 0 }}>{item.strMeal}</h5>
                        <p style={{ margin: 0, color: '#888' }}>Quantity: {item.quantity}</p>
                    </div>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.idMeal)}
                    >
                        Remove ❌
                    </button>
                </CartItem>
            ))}

            <div className="d-flex justify-content-between align-items-center mt-4">
                <button
                    className="btn btn-outline-danger"
                    onClick={clearCart}
                >
                    Clear Cart 🗑️
                </button>
                <h5>Total Items: {totalItems}</h5>
                <button
                    className="btn"
                    style={{ backgroundColor: '#ff6b35', color: 'white', borderRadius: '10px' }}
                    onClick={() => navigate('/order')}
                >
                    Place Order 📝
                </button>
            </div>
        </CartContainer>
    );
};

export default Cart;