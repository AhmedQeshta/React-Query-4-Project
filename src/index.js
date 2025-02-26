import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Create a client
const queryClient = new QueryClient();

root.render(
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
