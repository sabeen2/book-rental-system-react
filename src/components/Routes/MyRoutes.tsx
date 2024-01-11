import React from 'react';
import LoginForm from '../Login/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MyTesting from '../MyTesting';


const MyRoutes: React.FC = () => {
  const loggedin: boolean = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={loggedin ? '/dashboard' : '/login'} replace />} />
        <Route path="/dashboard" element={ loggedin ? <Dashboard /> : <Navigate to="/login" replace /> }/>
        <Route path="/login" element={ loggedin ? <Navigate to="/dashboard" replace /> : <LoginForm />  } />
        <Route path = "/test" element ={<MyTesting/>}  />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes; 
