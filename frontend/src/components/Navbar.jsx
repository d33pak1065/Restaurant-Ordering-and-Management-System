import React from 'react';
import {NavLink, Link, useNavigate } from 'react-router-dom';
import { clearAuth, getUser } from '../utils/auth';
import './nav.css';

const Navbar = () => {
  const navigate = useNavigate();
  const user = getUser();

  const logout = () => {
    clearAuth();
    navigate('/login');
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">
          <div className="logo">Paradise</div>
          <div className="tag">Taste the bliss</div>
        </Link>
      </div>

      <div className="nav-right">
        <NavLink to="/">Menu</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        {user ? (
          <>
            <NavLink to="/orders">Orders</NavLink>
            {user.isAdmin && <NavLink to="/admin">Admin</NavLink>}
            <button className="btn-link" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
