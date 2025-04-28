import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Education" element={<Education/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Skills" element={<Skills/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;