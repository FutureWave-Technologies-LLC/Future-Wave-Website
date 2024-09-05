import { Routes, Route } from 'react-router-dom';
import './App.css'

//Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LogsPage from './pages/LogsPage';

function App() {
  return (
    //Establish routes to be used for navigating
    //https://www.codeconcisely.com/posts/react-navigation/
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/logs" element={<LogsPage />} />
      </Routes>
    </div>
  )
}

export default App
