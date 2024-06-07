import React from 'react';
import { useDispatch } from 'react-redux';
import { clearToken } from '../store/authSlice';
import './LogoutButton.css';

const LogoutButton: React.FC = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearToken());
    };

    return (
        <div className="logout-button" onClick={handleLogout}>
            Logout
        </div>
    );
};

export default LogoutButton;
