/* eslint-disable jsx-a11y/anchor-is-valid */
import './css/bootswatch.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Favourites from './components/Favourites';
import Footer from './components/Footer';

// please read Comments.txt file
function App() {
  const [favourites, setFavourites] = useState([]);
  localStorage.setItem('favourites', JSON.stringify(favourites));

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar titleProp="I-TAINMENT" />
        <Routes>
          <Route exact path="/" element={<Home favourites={favourites} setFavourites={setFavourites} />} />
          <Route exact path="/myfavourites" element={<Favourites favourites={favourites} setFavourites={setFavourites} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
