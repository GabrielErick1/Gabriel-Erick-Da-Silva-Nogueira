import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default App;