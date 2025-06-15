// src/components/TopNavBar.js
import { Box, Flex, Link, Container } from '@chakra-ui/react';

function TopNavBar() {
  return (
    <Box bg="gray.100" py={2}>
      <Container maxW="1200px">
        <Flex justify="space-between" fontSize="sm">
          <Flex gap={4}>
            <Link href="#" _hover={{ color: 'blue.500' }}>웹하드</Link>
            <Link href="#" _hover={{ color: 'blue.500' }}>고객센터</Link>
            <Link href="#" _hover={{ color: 'blue.500' }}>A/S상담</Link>
            <Link href="#" _hover={{ color: 'blue.500' }}>카톡상담</Link>
          </Flex>
          <Flex gap={4}>
            <Link href="#" _hover={{ color: 'blue.500' }}>로그인</Link>
            <Link href="#" _hover={{ color: 'blue.500' }}>회원가입</Link>
            <Link href="#" _hover={{ color: 'blue.500' }}>장바구니</Link>
            <Link href="#" _hover={{ color: 'blue.500' }}>주문내역</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default TopNavBar;
