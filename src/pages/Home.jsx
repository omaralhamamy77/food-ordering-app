import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                minHeight: '90vh',
                background: 'linear-gradient(135deg, #ff6b35, #f7c59f)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <div>
                <h1
                    style={{
                        fontSize: '60px',
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    🍕 Welcome to FoodOrder
                </h1>
                <p
                    style={{
                        fontSize: '22px',
                        color: 'white',
                        marginBottom: '40px',
                    }}
                >
                    Order your favorite meals with just a few clicks!
                </p>
                <button
                    className="btn btn-light btn-lg"
                    style={{
                        borderRadius: '30px',
                        padding: '15px 40px',
                        fontSize: '18px',
                        color: '#ff6b35',
                        fontWeight: 'bold',
                    }}
                    onClick={() => navigate('/menu')}
                >
                    Order Now 🚀
                </button>
            </div>
        </div>
    );
};

export default Home;