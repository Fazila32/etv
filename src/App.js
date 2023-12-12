
import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import TopNav from './Components/TopNavbar/TopNav';
import Footer from './Components/footer/footer';
import Team from './Pages/Team';
import Strategy from './Pages/Strategy';
import Advisory_Council from './Pages/Advisory_Council';
function App() {
  return (
    <div className="App">
      
   <TopNav/>
   <Routes>
        <Route exact path="/" element={<Home/>} />
    <Route exact path='/team' element={<Team/>}/>
    <Route exact path='/strategy' element={<Strategy/>}/>
    <Route exact path='/advisory_council' element ={<Advisory_Council/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
