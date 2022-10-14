import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Artist from './pages/Artist';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:name' element={<Artist />} />
      </Routes>
    </div>
  );
}

export default App;
