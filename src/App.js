import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <div className='container'>
     
      <BrowserRouter>
      
      <Routes>
       <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
          <Route exact path='about' element={<About />}/>
          <Route exact path='contact' element={<Contact />}/>
        </Route>
        </Routes>
        </BrowserRouter>
   
        </div>
  );
}

export default App;
