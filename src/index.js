import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import TopRatedHome from './pages/toprated'
import DetailsHome from './pages/details'
import TopRatedDetailsHome from './pages/detailstoprated'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toprated" element={<TopRatedHome />} />
            <Route path="/details/:id" element={<DetailsHome />} />
            <Route path="/toprated/details/:id" element={<TopRatedDetailsHome />} />
        </Routes>
        
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
