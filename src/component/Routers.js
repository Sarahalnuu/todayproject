import React from 'react'
import { Routes, Route } from "react-router-dom"
import App from '../App'
import Create from './Create';
import Pagee from './Pagee';

function Routers() {
  return (
    <div>
        <Routes>
        <Route path='/' element ={<Create/>}></Route>
        <Route exact path='Home' element = {<Pagee/>}></Route>
        </Routes>
    </div>
  )
}

export default Routers