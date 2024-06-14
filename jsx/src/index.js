// import react and react dom
import React from 'react';

import ReactDOM from 'react-dom/client'
// get a ref to the div
const el = document.getElementById('root');
// tell react to take control of that element 
const root = ReactDOM.createRoot(el);
// create a component 
function App(){
    let message = "Hello";
    if(Math.random()>0.5){
        message = "hi";
    }
    
    return <h1>{message}</h1>
}
// show the component
root.render(<App />)