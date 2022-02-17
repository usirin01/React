import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Card from './components/card';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
Header();
