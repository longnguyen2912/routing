import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Home from './components/home';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:input" element={<Input />}/> 
        <Route path="/:input/:textColor/:backgroundColor" element={<Input />}/>
      </Routes>
    </div>
  );
}  
export default App;
