import {
  Grid,
  Flex,
  Box,
  Text,
  Heading,
  Wrap,
  GridItem,
  WrapItem,
  Icon,
  Tooltip,
  Button,
  Avatar,
} from "@chakra-ui/react";
import {
  HeroArea,
  Navbar,
  PackCard,
  SocialMedia,
  HamburguerMenu,
} from "../components";
import { useState } from "react";
import SuperBock from "../static/Super_bock.png";
import CP from "../static/CP.png";
import londrina from "../static/Londrina.png";
import OhMy from "../static/OhMy.jpg";

export default function Home() {
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Estudante",
      price: 20,
      discounted: 15,
      description: "Tens tudo sob controle",
      features: [
        "Palestras e atividades",
        "Almoços",
        "Coffe-breaks",
        "Transporte",
        "Brindes",
      ],
    },

    {
      id: 2,
      name: "Ministro",
      price: 60,
      discounted: 50,
      description: "Sôr ministro, temos jantar e boleia",
      features: [
        "Palestras e atividades",
        "Almoços",
        "Coffe-breaks",
        "Transporte",
        "Churrasco",
        "Taberna londrina",
        "Brindes",
      ],
    },
    {
      id: 4,
      name: "Presidente",
      price: 120,
      discounted: 105,
      description: "Sem preocupações, tratamos de tudo",
      features: [
        "Palestras e atividades",
        "Almoços",
        "Coffe-breaks",
        "Transporte",
        "Churrasco",
        "Taberna londrina",
        "Alojamento",
        "Brindes",
      ],
    },
  ]);

  let sponsers = [
    {
      id: 1,
      name: "Super Bock",
      logo: SuperBock,
      link: "https://www.superbock.pt/",
    },
    {
      id: 2,
      name: "CP",
      logo: CP,
      link: "https://www.cp.pt/",
    },
    {
      id: 3,
      name: "Londrina",
      logo: londrina,
      link: "https://www.facebook.com/tabernalondrina/",
    },
    {
      id: 4,
      name: "Oh My",
      logo: OhMy,
      link: "https://www.ohmysnacks.pt/",
    },
  ];

  return (
    <Flex flexDirection="column">
      <Navbar />

      <HeroArea />
      <SocialMedia />
      <Flex w="100%" justify="center">
        <Flex flexDirection="column" w={["95%", "95%", "60%", "65%", "60%"]}>
          <Flex align="center" w="100%" justify="center">
            <Box mt="5%" w="100%">
              <Box>
                <Heading color="black"> Os nosso packs</Heading>
                <Box mt="10px" bg="blue.200" h="2px" w="100%" />
              </Box>
              <Wrap
                mt="2%"
                spacing="15px"
                justify={[
                  "center",
                  "center",
                  "center",
                  "center",
                  "center",
                  "space-between",
                ]}
              >
                {plans.map((plan) => (
                  <PackCard plan={plan} />
                ))}
              </Wrap>
            </Box>
          </Flex>
          <Heading color="black" mt="3%">
            Patrocinadores
          </Heading>
          <Box mt="10px" bg="blue.200" h="2px" w="100%" />

          <Wrap justify="space-between" mt="20px" w="100%" h="200px">
            {sponsers.map((sponser) => (
              <WrapItem>
                <a href={sponser.link}>
                  <Avatar
                    h="120px"
                    w="120px"
                    src={sponser.logo}
                    alt={sponser.name}
                    filter="grayscale(100%)"
                    _hover={{ filter: "none", transition: "0.5s" }}
                  />
                </a>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Flex>
    </Flex>
  );
}
