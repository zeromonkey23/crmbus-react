import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Cas from './pages/Cas';
import Dashboard from './pages/Dashboard';
import ListCurriculum from './pages/ListCurriculum';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorize';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/list-curriculum' element={<ListCurriculum />} />
            <Route path='/cas' element={<Cas />} />
            <Route path='/' element={<Navigate to='/dashboard' replace />} />
          </Route>
          <Route path='/SSO' element={<Login />}></Route>
          <Route path='/unauthorized' element={<Unauthorized />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
