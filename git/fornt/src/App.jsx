import { useEffect, useState } from "react"
import axios from 'axios';

function App() {
  const[users, setusers]=useState([])
  const[firstname, setfirstname]=useState('')
  const[lastname, setlastname]=useState('')
  const[email, setemail]=useState('')
  const[password, setpassword]=useState('')
  

 useEffect(()=>{
  axios.get('http://localhost:3000/users')
  .then(data => setusers(data.data))
 },[users])
 console.log(users,'users')

 const handleclick = () =>{
  axios.post('http://localhost:3000/users',{
    firstname : firstname,
    lastname :lastname,
    email :email,
    password :password
  })
 }
 
   
  return (
    <>
      <h1>USERS LIST:</h1>
      {
        users.map((items)=>(
          <ul>
            <li>
              {items.firstname}
            </li>
            <li>
              {items.lastname}
            </li>
            <li>
              {items.email}
            </li>
          </ul>
        ))
      }
      <div>
        <input onChange={(e)=>setfirstname(e.target.value)}  type="text" placeholder="firstname" /><br />
        <input onChange={(e)=>setlastname(e.target.value)}  type="text" placeholder="lastname" /><br />
        <input onChange={(e)=>setemail(e.target.value)}  type="email" placeholder="email" /><br />
        <input onChange={(e)=>setpassword(e.target.value)}  type="password" placeholder="password" /><br />
        <button onClick={handleclick}>SUBMIT</button>
      </div>
    </>
  )
}

export default App
