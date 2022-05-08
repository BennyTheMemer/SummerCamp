import {
  WrapItem,
  Flex,
  Text,
  Box,
  Heading,
  Tooltip,
  Button,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function PackCard({ plan, ...rest }) {
  let allPerks = [
    "Palestras e atividades",
    "Almoços",
    "Coffe-breaks",
    "Transporte",
    "Churrasco",
    "Taberna londrina",
    "Alojamento",
    "Brindes",
  ];

  function checkPerk(perk, plan) {
    if (plan.features.includes(perk)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <WrapItem>
      <Flex
        flexDirection="column"
        border="1px double rgba(250, 26, 13, 1)"
        borderRadius="15px"
        h="30rem"
        p="15px"
        minW="20rem"
        maxW="22rem"
      >
        <Flex flexDirection="column" justify="center">
          <Text
            textAlign="center"
            fontSize="2.2rem"
            noOfLines={2}
            color="black"
            fontWeight="600"
          >
            {plan.name}
          </Text>
          <Text mt="-0.4rem" textAlign="center" color="gray">
            {plan.description}
          </Text>
          <Box>
            <Box w="100%">
              <Flex justify="center" align="start">
                <Text
                  lineHeight="3.2rem"
                  color="black"
                  fontWeight="900"
                  fontSize="3rem"
                >
                  {plan.price}
                </Text>
                <Text fontSize="1.6rem" color="black">
                  €
                </Text>
              </Flex>
            </Box>
            <Flex mt="-0.2rem" justify="center" align="center">
              <Text color="black">{plan.discounted}€ </Text>
              <Tooltip
                hasArrow
                placement="top"
                label="Desconto para estudantes pertencentes a núcleos associados ao CNEAP"
              >
                <span
                  style={{
                    align: "center",
                    justify: "center",
                    display: "flex",
                  }}
                >
                  <Icon
                    as={AiFillQuestionCircle}
                    color="rgba(195, 195, 195, 1)
                        "
                  />
                </span>
              </Tooltip>
            </Flex>
          </Box>
          <Flex mt="5%" flexDirection="column">
            {allPerks.map((perk) => (
              <Flex align="center">
                {checkPerk(perk, plan) ? (
                  <Icon
                    boxSize="1.2rem"
                    color="green.500"
                    as={AiOutlineCheck}
                  />
                ) : (
                  <Icon boxSize="1.2rem" color="red.500" as={AiOutlineClose} />
                )}{" "}
                <Text
                  ml="1rem"
                  color={checkPerk(perk, plan) ? "black" : "gray"}
                  fontSize="1rem"
                >
                  {perk}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex h="100%" align="end" justify="center" w="100%">
          <Button
            border="1px solid"
            borderColor="red.500"
            color="black"
            _hover={{ bg: "red.500", color: "white" }}
          >
            <Text>RESERVAR</Text>
          </Button>
        </Flex>
      </Flex>
    </WrapItem>
  );
}
