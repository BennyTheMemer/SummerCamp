import { Box, Flex } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import React from "react";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagram,
  FaSteamSquare,
  FaTwitter,
} from "react-icons/fa";

export default function SocialMedia(props) {
  const { isOpen } = props;
  return (
    <>
      <Flex position="relative" h="calc(100%-8vh)" w="4vw">
        <Flex
          flexDirection="column"
          h="calc(100%-8vh)"
          w="4vw"
          position="fixed"
          right="0"
          top="0"
          bottom="0"
          align="center"
          justifyContent="center"
          display={{ base: "none", lg: "flex" }}
          bg="transparent"
          zIndex="100"
        >
          <Box my="0.7vw">
            <Icon
              as={FaInstagram}
              color="gray.500"
              w="6"
              h="6"
              _hover={{ transform: "scale(1.1)", color: "red" }}
            />
          </Box>
          <Box my="0.7vw">
            <Icon
              as={FaFacebookSquare}
              color="gray.500"
              w="6"
              h="6"
              _hover={{ transform: "scale(1.1)", color: "red" }}
            />
          </Box>

          <Box my="0.7vw">
            <a href="" target="_blank">
              <Icon
                as={FaTwitter}
                color="gray.500"
                w="6"
                h="6"
                _hover={{ transform: "scale(1.1)", color: "red" }}
              />
            </a>
          </Box>
        </Flex>
      </Flex>
      <Flex
        h="100%"
        flexDirection="column"
        align="center"
        justifyContent="center"
        display={isOpen ? { base: "flex", lg: "none" } : "none"}
      >
        <Box my="1">
          <Icon as={FaSteamSquare} color="gray.500" w="5" h="5" />
        </Box>
        <Box my="1">
          <Icon as={FaInstagram} color="gray.500" w="5" h="5" />
        </Box>
        <Box my="1">
          <Icon as={FaFacebookSquare} color="gray.500" w="5" h="5" />
        </Box>
        <Box my="1">
          <Icon as={FaDiscord} color="gray.500" w="5" h="5" />
        </Box>
        <Box my="1">
          <Icon as={FaTwitter} color="gray.500" w="5" h="5" />
        </Box>
      </Flex>
    </>
  );
}
