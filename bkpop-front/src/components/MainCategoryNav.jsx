import { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

function MainCategoryNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const categories = [
    {
      title: '명함',
      items: [
        '일반지명함',
        '고급지명함',
        '카드명함',
        '하이브리드명함',
        '투명하이브리드명함',
        '에폭시명함',
        '프리컷팅',
      ],
    },
    {
      title: '봉투',
      items: [
        '대/중/소',
        '규격형',
        '자켓형',
        '안내형',
        '기성형',
        '캘린더봉투',
      ],
    },
    {
      title: '전단',
      items: [
        '합판전단',
        '고급전단',
        '랑데뷰합판',
      ],
    },
    {
      title: '스티커',
      items: [
        '재단형',
        '도무송형',
        '차량스티커',
        '메탈스티커',
        '라벨스티커(롤)',
      ],
    },
    {
      title: '홍보물',
      items: [
        '카탈로그/브로셔',
        '포스터',
        '리플렛',
        '책자',
        '홀더',
      ],
    },
  ];

  return (
    <Box bg="white" borderBottom="1px" borderColor="gray.200">
      <Container maxW="1200px">
        <Flex justify="space-between" align="center" py={4}>
          {/* 왼쪽: 카테고리 메뉴 */}
          <Flex gap={8}>
            <Button
              leftIcon={<Text fontSize="xl">≡</Text>}
              variant="ghost"
              onClick={onOpen}
            >
              카테고리
            </Button>
            <HStack spacing={6}>
              <Text cursor="pointer" _hover={{ color: 'blue.500' }}>테스트</Text>
              <Text cursor="pointer" _hover={{ color: 'blue.500' }}>테스트</Text>
              <Text cursor="pointer" _hover={{ color: 'blue.500' }}>테스트</Text>
              <Text cursor="pointer" _hover={{ color: 'blue.500' }}>테스트</Text>
              <Text cursor="pointer" _hover={{ color: 'blue.500' }}>테스트</Text>
            </HStack>
          </Flex>

          {/* 오른쪽: 아이콘 메뉴 */}
          <HStack spacing={6}>
            <Flex align="center" gap={1} cursor="pointer" _hover={{ color: 'blue.500' }}>
              <Text fontSize="xl">📸</Text>
              <Text>상품소개</Text>
            </Flex>
            <Flex align="center" gap={1} cursor="pointer" _hover={{ color: 'blue.500' }}>
              <Text fontSize="xl">✏️</Text>
              <Text>인쇄가이드</Text>
            </Flex>
            <Flex align="center" gap={1} cursor="pointer" _hover={{ color: 'blue.500' }}>
              <Text fontSize="xl">👤</Text>
              <Text>마이페이지</Text>
            </Flex>
          </HStack>
        </Flex>
      </Container>

      {/* 카테고리 드로어 */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">카테고리</DrawerHeader>
          <DrawerBody>
            <SimpleGrid columns={2} spacing={8}>
              {categories.map((category) => (
                <VStack key={category.title} align="start" spacing={2}>
                  <Text fontWeight="bold" fontSize="lg">{category.title}</Text>
                  {category.items.map((item) => (
                    <Text
                      key={item}
                      cursor="pointer"
                      _hover={{ color: 'blue.500' }}
                    >
                      {item}
                    </Text>
                  ))}
                </VStack>
              ))}
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MainCategoryNav;