import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import VoteProvider from './context/VoteContext';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VoteProvider>
        <App />
      </VoteProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
