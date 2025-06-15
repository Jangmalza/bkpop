// src/components/HeaderArea.js
import { Box, Container, Flex, Image, Button, Text } from '@chakra-ui/react';
import './HeaderArea.css';
import logo from '../assets/logo.png';

function HeaderArea() {
  return (
    <Box bg="white" py={4} borderBottom="1px" borderColor="gray.200">
      <Container maxW="1200px">
        <Flex justify="space-between" align="center">
          {/* 로고 */}
          <Box>
            <Image src={logo} alt="로고" h="40px" />
          </Box>

          {/* 오른쪽: 버튼/안내 */}
          <Flex gap={4} align="center">
            <Text
              color="gray.600"
              cursor="pointer"
              _hover={{ color: 'blue.500' }}
            >
              ❓ 사이트 이용방법
            </Text>
            <Button
              colorScheme="blue"
              size="sm"
              rightIcon={<Text>⬇</Text>}
            >
              양식 다운받기
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default HeaderArea;
