import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Flex,
  Grid,
  GridItem,
  Text,
  Box,
  Heading,
  Stack,
} from "@chakra-ui/react";

function App() {
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Basic",
      price: 15,
      discounted: 12.5,
      description: "Perfeito para os minimalistas",
      features: [
        "Palestras e atividades",
        "Almoços",
        "Coffe-breaks",
        "brindes",
      ],
    },
    {
      id: 2,
      name: "Primeiro-Ministro",
      price: 25,
      discounted: 21,
      description: "Perfeito para quem já tem transporte",
    },
    {
      id: 3,
      name: "Presidente da República",
      price: 120,
      discounted: 105,
      description: "Perfeito para quem quer tudo tratado",
      features: [
        "Palestras e atividades",
        "Almoços",
        "Coffe-breaks",
        "brindes",
        "transporte",
        "alojamento",
        "e mais!",
      ],
    },
    {
      id: 3,
      name: "Presidente da República",
      price: 120,
      discounted: 105,
      description: "Perfeito para quem quer tudo tratado",
      features: [
        "Palestras e atividades",
        "Almoços",
        "Coffe-breaks",
        "brindes",
        "transporte",
        "alojamento",
        "e mais!",
      ],
    },
  ]);

  return (
    <Flex p="20px" flexDirection="column" h="100vh">
      <Heading>Summer Camp</Heading>
      <Flex w="100%" justify="center">
        <Grid
          gap="10"
          templateColumns={[
            "repeat(1, 1fr)",
            ,
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          mt="5%"
          w={["90%", "90%", "90%", "100%"]}
        >
          {plans.map((plan) => (
            <GridItem
              key={plan.id}
              borderRadius="15px"
              border="4px solid"
              borderColor="blue.700"
              h="55vh"
              p="5px"
            >
              <Box w="90%">
                <Flex bg="red" h="100%">
                  <Flex>
                    <Text lineHeight="3rem" fontSize="60px">
                      15
                    </Text>
                    <Flex align="start" h="60px">
                      <Text lineHeight="1.8rem" fontSize="30px">
                        €
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex w="1px" bg="black" transform="rotate(20deg)" />
                  <Flex flexDirection="column">
                    <Text>12.5€</Text>
                    <Text fontSize="6px" color="black">
                      Alunos associados a núcleos do CNEAP
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}

export default App;
