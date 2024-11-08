import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Genres from './pages/Genres';
import MyLists from './pages/MyLists';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/my-lists" element={<MyLists />} />
      </Routes>
    </Router>
  );
}

export default App;
