import { Flex, Box, Text, Heading, Avatar } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../static/Logo.jpeg";

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
      color="black"
      borderBottom="1px solid"
      borderColor="red.500"
      justify="center"
      align="center"
      display={["none", "none", "none", "flex"]}
    >
      <Box w={["", "", "", "65%", "60%"]}>
        <Flex align="center" justify="space-between">
          <Avatar
            border="1px solid red"
            mt="6rem"
            h="12rem"
            w="12rem"
            src={logo}
          />

          {routes.map((route) => (
            <NavLink
              to={route.path}
              style={{
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
