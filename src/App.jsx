// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyled from './styles/GlobalStyled';  // Importe o GlobalStyled
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Genres from './pages/Genres';
import MyLists from './pages/MyLists';

function App() {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/my-lists" element={<MyLists />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
