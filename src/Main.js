import React from 'react';
import {Route, Routes} from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume'
import App from './App';

const Main = () => (
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route exact path="#about" element={<About/>}/>
      <Route exact path="#contact" element={<Contact/>}/>
      <Route exact path="#resume" element={<Resume/>}/>
    </Routes>
)

export default Main;