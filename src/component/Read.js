import React, { useEffect, useState, Link } from 'react';
import axios from "axios";

function Read() {
  const [state, setstate] = useState([])
  useEffect (() => {
    axios.get("https://6362425566f75177ea2a9ac0.mockapi.io/Todolist").then((res)=>{
      console.log(res.data)
      setstate(res.data)
    })
  }, [])

  //Delete
     const onDelete = (id) => {
       console.log(id)
      axios.delete(`https://6362425566f75177ea2a9ac0.mockapi.io/Todolist/${id}`).then (res => {
       console.log(res)
       setstate(state.filter(del =>{
        return del.id != id
       }))

    }) }


  return (
    <div>
        {state.map(items => {
        return(
        <div>
          <p>First Name: {items.fName}</p>
          <p>Last Name: {items.lName}</p>
          <button onClick={() => {onDelete(items.id)}}>Delete</button>
        <Link to ="/Update">
            <button onClick={() => localStorage.setItem("id, items.id")}>update</button></Link> 
          </div>
        )
      })}
    </div>
  )
}

export default Read