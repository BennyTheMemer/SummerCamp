import { Flex, Text, Heading, chakra, Button, Image } from "@chakra-ui/react";
import background from "../static/background.jpg";
import SummerCamp from "../static/removed-bg-image.png";

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
          <Image h="200px" src={SummerCamp} />
          <Text mt="3rem" fontSize="2xl" fontWeight="500">
            Se o teu moto é{" "}
            <chakra.span as={"i"}>work hard play harder</chakra.span> viemos-te
            trazer o melhor dos dois mundos
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
