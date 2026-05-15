import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #ff6b35;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  font-size: 24px;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CartBadge = styled.span`
  background-color: white;
  color: #ff6b35;
  border-radius: 50%;
  padding: 2px 8px;
  font-weight: bold;
  margin-left: 5px;
`;

const Navbar = () => {
    const { totalItems } = useCart();

    return (
        <Nav>
            <Logo>🍕 FoodOrder</Logo>
            <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/cart">
                    Cart <CartBadge>{totalItems}</CartBadge>
                </Link>
            </NavLinks>
        </Nav>
    );
};

export default Navbar;