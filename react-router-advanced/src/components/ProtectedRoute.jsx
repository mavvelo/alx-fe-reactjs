// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Your authentication context

function ProtectedRoute({ element, ...rest }) {
  const { isLoggedIn } = useAuth(); // Get authentication status from context

  return (
    <Route
      {...rest}
      element={isLoggedIn ? element : <Navigate to="/login" replace />}
    />
  );
}

export default ProtectedRoute;