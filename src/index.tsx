import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './containers/Dashboard/DashboardPage';
import LoginPage from './containers/Login/LoginPage';
import DetailPage from './containers/Detail/DetailPage';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="detail" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
  </RecoilRoot>,
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
