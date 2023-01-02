import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './contexts';
import { App } from './App';
import { BrowserRouter } from  'react-router-dom';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>

        <App />

      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
