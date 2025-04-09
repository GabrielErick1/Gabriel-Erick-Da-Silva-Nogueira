import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Details = lazy(() => import('./pages/Details'));
const SubmitInfo = lazy(() => import('./pages/SubmitInfo'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/submit/:id" element={<SubmitInfo />} />
    </Routes>
  );
};

export default AppRoutes;