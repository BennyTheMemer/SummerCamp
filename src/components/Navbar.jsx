import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let routes = [
    {
      path: "/Patrocinadores",
      name: "Patrocinadores",
    },
    {
      path: "/Alojamento",
      name: "Sobre",
    },
    {
      path: "/Atividades",
      name: "Contato",
    },
    {
      path: "/faq",
      name: "FAQ",
    },
  ];

  return (
    <Flex
      h="10vh"
      w="100%"
      bg="red.500"
      color="white"
      justify="center"
      align="center"
      display={["none", "none", "none", "flex"]}
    >
      <Box w={["", "", "", "65%", "60%"]}>
        <Flex align="center" justify="space-between">
          <Heading color="black">SummerCamp</Heading>

          {routes.map((route) => (
            <NavLink
              to={route.path}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Text
                fontSize="1.2rem"
                fontWeight="600"
                _hover={{ textDecoration: "underline" }}
              >
                {route.name}
              </Text>
            </NavLink>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
