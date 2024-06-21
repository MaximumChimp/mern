import { useEffect, useState } from 'react';
import Header  from './components/header';
import "./assets/css/header.css";
import "./assets/css/home.css";
import './assets/css/App.css';
import Home from './components/home';
import axios from 'axios';
function App() {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/getUsers")
    .then(users => setUsers(users.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <>
      <h1>
        {console.log(users)}
        </h1>
      <Header></Header>
      <Home></Home>
    </>
  )
}

export default App
