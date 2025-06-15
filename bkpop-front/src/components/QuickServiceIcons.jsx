// src/components/QuickServiceIcons.js
import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';

const services = [
  { id: 1, label: '명함주문', icon: '💳' },
  { id: 2, label: '디자인 의뢰', icon: '🎨' },
  { id: 3, label: '주문조회', icon: '📦' },
  { id: 4, label: '견적문의', icon: '📝' },
  { id: 5, label: '시안확인', icon: '🔍' },
  { id: 6, label: '카톡상담', icon: '💬' },
];

function QuickServiceIcons() {
  return (
    <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
      <Heading size="md" mb={4}>빠른 서비스</Heading>
      <SimpleGrid columns={2} spacing={4}>
        {services.map((item) => (
          <VStack
            key={item.id}
            p={3}
            bg="gray.50"
            borderRadius="md"
            cursor="pointer"
            _hover={{ bg: 'gray.100' }}
          >
            <Text fontSize="2xl">{item.icon}</Text>
            <Text fontSize="sm" textAlign="center">{item.label}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default QuickServiceIcons;
