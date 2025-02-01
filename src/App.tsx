import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const navLinks = [
    { name: 'ABOUT', path: '/about' },
    { name: 'EXPERIENCE', path: 'experience'},
    { name: 'CONTACT', path: 'contact'},
  ];

  return (
    <>
      <Router>
        <NavBar links={navLinks}/>
        <div className="p-4">
          <Routes>
            <Route path="/about" element={<h2 className="text-center" />}/>
            <Route path="/experience" element={<h2 className="text-center" />}/>
            <Route path="/contact" element={<h2 className="text-center" />}/>
          </Routes>
        </div>
      </Router>
      <h1 className="mb-4">Shun Fujita</h1>
      <p className="mx-auto flex max-w-[600px] text-justify text-lg">
        Hello! my name is Shun Fujita, an undergraduate at Northwestern University,
        passionate about the intersection of Computer Science and Mathematics. I was
        born and raised in Japan for my whole life (20 years). My broad interests lie
        in statistics, machine learning, and systems programming and hope to work in 
        field where I can leverage technology to make an impact.
      </p>
    </>
  )
}

export default App
