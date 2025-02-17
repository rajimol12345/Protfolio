import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Qualification" element={<Qualification/>}/>
      </Routes>
    </div>
  );
}

export default App;
