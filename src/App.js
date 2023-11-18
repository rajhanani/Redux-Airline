import './App.css';
import { Flights } from './Components/Mainpage/Flights';
import { Login } from './Components/register.js/Login';
import { Signup } from './Components/register.js/Signup';
import { Nav } from './Components/header.js/Nav';
import { Routes,Route } from 'react-router-dom';
import { Oneairline } from './Components/Select Airline/Oneairline';
import { AddFlight } from './Components/Add Flight/AddFlight';
import { Bookticket } from './Components/ticket/Bookticket';

function App() {
  return (
    <div>

  <Nav/>
  
    <Routes>
    
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/airlineportal' element={<Flights/>}></Route>
    <Route path='/oneairline/:id' element={<Oneairline/>}></Route>
    <Route path='/addflight' element={<AddFlight/>}></Route>
    <Route path='/showticket' element={<Bookticket/>}></Route>

      </Routes>
  
    
     
    </div>
  );
}

export default App;
