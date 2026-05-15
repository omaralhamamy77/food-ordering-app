import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #f7c59f, #ff6b35);
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 500px;
  width: 90%;
`;

const Confirmation = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Card>
                <h1 style={{ fontSize: '70px' }}>🎉</h1>
                <h2 style={{ color: '#ff6b35', fontWeight: 'bold' }}>Order Confirmed!</h2>
                <p style={{ color: '#888', fontSize: '18px', margin: '20px 0' }}>
                    Thank you for your order! Your food is being prepared and will be delivered soon. 🍕
                </p>
                <button
                    className="btn btn-lg w-100"
                    style={{ backgroundColor: '#ff6b35', color: 'white', borderRadius: '10px', padding: '12px' }}
                    onClick={() => navigate('/')}
                >
                    Back to Home 🏠
                </button>
            </Card>
        </Container>
    );
};

export default Confirmation;