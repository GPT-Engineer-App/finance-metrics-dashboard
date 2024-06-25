import { Container, SimpleGrid, Box, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Financial Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Revenue</Heading>
            <Text mt={4}>$0.00</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Expenses</Heading>
            <Text mt={4}>$0.00</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Profit</Heading>
            <Text mt={4}>$0.00</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Other Metric</Heading>
            <Text mt={4}>$0.00</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;