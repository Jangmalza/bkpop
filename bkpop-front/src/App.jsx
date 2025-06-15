import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import TopNavBar from './components/TopNavBar.jsx';
import HeaderArea from './components/HeaderArea.jsx';
import MainCategoryNav from './components/MainCategoryNav.jsx';
import Home from './pages/Home.jsx';
import theme from './theme.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh" bg="gray.50">
          <TopNavBar />
          <HeaderArea />
          <MainCategoryNav />
          <Box as="main" py={4}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
