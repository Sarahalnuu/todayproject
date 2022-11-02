import './App.css';
 import React, { useEffect, useState } from 'react';
 import axios from "axios";// 
import Create from './component/Create';
import page from './component/page';
 import { Routes, Route } from 'react-router-dom'
import Routers from './component/Routers';
import Pagee from './component/Pagee';

function App() {

   return (
    <div className="App">

      <Routes></Routes> 
{/* <Pagee></Pagee> */}
      <Create></Create>  

    </div>
  );
   } 


export default App;
