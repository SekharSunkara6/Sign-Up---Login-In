import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Tracker from './pages/Tracker';
import './App.css';

const App: React.FC = () => {
  const token = useSelector((state: RootState) => (state as RootState).auth.token);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {token && (
          <>
            <Route path="/tracker" element={<Tracker />} />
            <Route path="*" element={<Navigate to="/tracker" replace />} />
          </>
        )}
        {!token && <Route path="*" element={<Navigate to="/signup" replace />} />}
      </Routes>
    </Router>
  );
};
export default App;