import {
  Flex,
  Text,
  Heading,
  chakra,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Icon,
} from "@chakra-ui/react";
import background from "../static/background.jpg";
import SummerCamp from "../static/removed-bg-image.png";
import React from "react";
import { FaBars } from "react-icons/fa";

export default function HeroArea() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      h="90vh"
      backgroundImage={background}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundColor="gray.100"
      backgroundBlendMode="darken"
      align="center"
      flexDirection="column"
    >
      <Flex flexDirection="column" w="95%">
        <Button
          display={["flex", , , "none", "none"]}
          w="10%"
          ref={btnRef}
          onClick={onOpen}
          bg="none"
          border="none"
        >
          <Icon color="red.500" as={FaBars} size="1.5rem" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Flex
          ml={["none", "none", "none", "20%"]}
          mt={["40%", "15%"]}
          w={["100%", "95%", "60%", "65%", "60%"]}
          justify={["center", "center", "center", "normal"]}
        >
          <Flex w="40rem" flexDirection="column">
            <Image h="200px" src={SummerCamp} />
            <Text color="black" mt="3rem" fontSize="2xl" fontWeight="500">
              Se o teu moto é{" "}
              <chakra.span as={"i"}>work hard play harder</chakra.span>{" "}
              viemos-te trazer o melhor dos dois mundos
            </Text>
            <Button
              border="1px solid"
              borderColor="red.500"
              color="black"
              bg="white"
              _hover={{ bg: "red.500", color: "white" }}
              w="10rem"
              top="10%"
            >
              <Text>RESERVAR</Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
