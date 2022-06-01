import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../components/App';
import Header from '../components/Header';
import FilesList from '../components/FilesList';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<FilesList />} path="/list" />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;