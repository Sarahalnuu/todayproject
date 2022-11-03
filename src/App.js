import './App.css';
 import React, { useEffect, useState } from 'react';
 import axios from "axios";// 
import Create from './component/Create';
import page from './component/page';
 import { Routes, Route, Router } from 'react-router-dom'
import Routers from './component/Routers';
import Pagee from './component/Pagee';
import Read from './component/Read';
import Update from './component/Update';

function App() {

   return (
    <div>
 {/* <Read></Read> */}
      {/* <Routers/>  */}
  {/* <Pagee></Pagee>  */}
  {/* <Create></Create> */}
  <Router>
    <Routes>
        {/* <Route path='/' element ={<Create/>}></Route>
        <Route exact path='Home' element = {<Pagee/>}></Route> */}
        <Route path="/Read" element ={<Read/>}></Route>
        <Route path="/Update" element = {<Update/>}></Route>
        </Routes>
        </Router>

    </div>
  );
   } 


export default App;
