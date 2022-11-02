import React, { useState } from 'react'
import axios from "axios"
export default function Create() {
    const [fName, setFName] = useState ()
    const [lName, setLName] = useState ()
    const [email, setEmail] = useState ()
    const [pass, setPass] = useState ()
    let url = "https://6362425566f75177ea2a9ac0.mockapi.io/Todolist"

    const postData = () => {
    axios.post(url, {
    fName,
    lName,
    email,
    pass,
    }).then(res => {
        console.log(res);
    })
    }
  return (

    <div>
        <input placeholder='Fname' onChange={e => { setFName(e.target.value)}}></input>
        <input placeholder='Lname' onChange={e => { setLName(e.target.value)}}></input>
        <input placeholder='Email' onChange={e => { setEmail(e.target.value)}}></input>
        <input placeholder='pass' onChange={e => { setPass(e.target.value)}}></input>
        <button onClick={postData}>LogIn</button>
    </div>
  )
}
