// import react and react dom
import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
// get a ref to the div
const el = document.getElementById('root');
// tell react to take control of that element
const root = ReactDOM.createRoot(el);

// show the component
root.render(<App />);
