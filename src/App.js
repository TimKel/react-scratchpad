// import logo from './logo.svg';
import React from 'react';
import items from './items'
import Alert from './Alert'
import moreItems from './moreItems'
import Cart from './cart'
import './App.css';

function App() {
  return (
    <>
      <Alert variant="success">
        <h1>Welcome Back!</h1>
      </Alert>
      <Alert variant="warning">
        <h1>Beware!</h1>
      </Alert>
      <Alert variant="danger">
        <h1>OH NO!</h1>
      </Alert>
      <Cart items={items} username="carly" />
      <Cart items={moreItems}username="rob" />
      </>
  );
}

export default App;
