import React, { useState, useEffect } from 'react';
import FoodCard from '../components/FoodCard';

const Menu = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('pizza');
    const [loading, setLoading] = useState(false);

    const fetchMeals = () => {
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals || []);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchMeals();
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4" style={{ color: '#ff6b35' }}>
                🍽️ Our Menu
            </h2>

            <div className="d-flex justify-content-center mb-4 gap-2">
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search for a meal..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button
                    className="btn"
                    style={{ backgroundColor: '#ff6b35', color: 'white' }}
                    onClick={fetchMeals}
                >
                    Search 🔍
                </button>
            </div>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" style={{ color: '#ff6b35' }}></div>
                </div>
            ) : meals.length === 0 ? (
                <p className="text-center text-muted">No meals found!</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {meals.map(meal => (
                        <div className="col" key={meal.idMeal}>
                            <FoodCard meal={meal} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Menu;