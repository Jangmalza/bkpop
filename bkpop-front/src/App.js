import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import HeaderArea from './components/HeaderArea';
import MainCategoryNav from './components/MainCategoryNav';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <TopNavBar />
      <HeaderArea />
      <MainCategoryNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
