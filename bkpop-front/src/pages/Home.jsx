// Home.js
import { Box, Container, Flex } from '@chakra-ui/react';
import './Home.css';
import BannerSlider from '../components/BannerSlider.jsx';
import QuickServiceIcons from '../components/QuickServiceIcons.jsx';

function Home() {
  return (
    <Container maxW="1200px" px={5}>
      <Flex gap={5} my={5}>
        <Box flex={3}>
          <BannerSlider />
        </Box>
        <Box flex={1} minW="220px">
          <QuickServiceIcons />
        </Box>
      </Flex>
    </Container>
  );
}

export default Home;
