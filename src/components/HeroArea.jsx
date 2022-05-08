import { Flex, Text, Heading, chakra, Button } from "@chakra-ui/react";
import background from "../static/background.jpg";

export default function HeroArea() {
  return (
    <Flex
      h="90vh"
      backgroundImage={background}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundColor="gray.100"
      backgroundBlendMode="darken"
      justify="center"
    >
      <Flex mt="12%" w={["95%", "95%", "60%", "65%", "60%"]}>
        <Flex w="40rem" flexDirection="column">
          <Heading fontSize="5rem">
            Verão em <chakra.span color="red.500">AP</chakra.span>
          </Heading>
          <Text fontWeight="600" fontSize="4xl" color="blue.300">
            Summer Camp
          </Text>
          <Text fontSize="2xl" fontWeight="500">
            Se o teu moto é work hard play harder viemos-te trazer o melhor dos
            dois mundos
          </Text>
          <Button
            border="1px solid"
            borderColor="red.500"
            color="black"
            _hover={{ bg: "red.500", color: "white" }}
            w="10rem"
            top="10%"
          >
            <Text>RESERVAR</Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
