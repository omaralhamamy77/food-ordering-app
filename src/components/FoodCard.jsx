import React from 'react';
import { useCart } from '../context/CartContext';

const FoodCard = ({ meal }) => {
    const { addToCart } = useCart();

    return (
        <div className="card h-100 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <img
                src={meal.strMealThumb}
                className="card-img-top"
                alt={meal.strMeal}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{meal.strMeal}</h5>
                <p className="card-text text-muted" style={{ fontSize: '14px' }}>
                    {meal.strCategory} • {meal.strArea}
                </p>
                <button
                    className="btn mt-auto"
                    style={{ backgroundColor: '#ff6b35', color: 'white', borderRadius: '10px' }}
                    onClick={() => addToCart(meal)}
                >
                    Add to Cart 🛒
                </button>
            </div>
        </div>
    );
};

export default FoodCard;