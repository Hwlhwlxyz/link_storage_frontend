import React from 'react';
import logo from './logo.svg';
import './App.css';
import { atom } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './containers/Dashboard/DashboardPage';
import DetailPage from './containers/Detail/DetailPage';
import LoginPage from './containers/Login/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import SignupPage from './containers/Signup/LoginPage';

function App() {


  return (

<Routes>
      <Route path="/" element={getExamplePage()} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="detail" element={<DetailPage type={'update'} />} />
      <Route path="new" element={<DetailPage type={'create'} />} />
      <Route path="private" element={
      <PrivateRoute>
        <DetailPage type={'create'} />
        </PrivateRoute>
        } />
    </Routes>

    

  )
}

function getExamplePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      
    </div>

    
  );
}

export default App;
