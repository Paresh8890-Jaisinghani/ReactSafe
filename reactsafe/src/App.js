import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact';

import AboutUs from './components/about';

import Home from './components/home';
import Task1 from './components/task1';

function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/task1' element={<Task1 />}></Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


    </>
  );
}

export default App;
