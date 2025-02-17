import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'EXPERIENCE', path: 'experience'},
    { name: 'CONTACT', path: 'contact'},
  ];

  return (
    <>
      <Router>
        <div className="fixed top-10 left-0 w-full">
          <NavBar links={navLinks}/>
        </div>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
