import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';
import Login from '../components/Login';

const App = () => {
  return (
    <div className='App'>
      <Header> </Header>
      <Login></Login>
      <Footer></Footer>
      

    </div>
  );
};

export default App;
