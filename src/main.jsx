import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Search } from './pages/search';
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </Router>
  </StrictMode>,
)