// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './composants/home.js';
import About from './composants/about.js';
import Contact from './composants/contact.js';
import Login from './composants/login.js';
import Register from './composants/register.js';
import DashboardInterface from './composants/userInterface/dashboard.js'
import ProtectedRoute from './composants/protectedRoute.js';

function App() {
 
  return (
    <Router>
      
      <div className="App">
      
          <Routes >

            <Route path = "/" exact Component={Home}/>
            <Route path = "/about" Component={About}/>
            <Route path = "/contact" Component = {Contact}/>
            <Route path = "/login" Component = {Login}/>
            <Route path = "/register" Component = {Register}/>
            <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardInterface />
              </ProtectedRoute>
            }
          />
          </Routes >
        
      </div>
    </Router>
  );
}


export default App;
