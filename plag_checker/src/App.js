import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './components/LoginPage';
import PlagCheckPage from './components/PlagCheckPage';
import SignUpPage from './components/SignUpPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/plag-check/:id' element={<PlagCheckPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;