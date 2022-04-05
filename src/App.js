
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs'
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
