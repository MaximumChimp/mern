import { useEffect, useState } from 'react';
import Header  from './components/header';
import "./assets/css/header.css";
import "./assets/css/home.css";
import './assets/css/App.css';
import './assets/css/Background.css'
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

      <div class="area" >
    
        <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
        <Header></Header>
        <Home></Home>
        </div >
      
    </>
  )
}

export default App
