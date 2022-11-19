import {
  Box,
  HStack,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  InputRightElement,
  Button,
  Avatar,
  VStack,
  Text,
} from "@chakra-ui/react";

import { BiSearch } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <Box height="60px" backgroundColor={"white"}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        padding="0 40px"
      >
        <HStack>
          <InputGroup
            size="sm"
            width="520px"
            backgroundColor="#F5F8FA"
            color="#7E8299"
            rounded="md"
            sx={{
              "@media screen and (max-width: 768px)": {
                width: "200px",
              },
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={BiSearch} />}
            />

            <Input placeholder="Search" type="search" />

            <InputRightElement
              children="Ctrl + K"
              width="4rem"
              fontStyle="italic"
              fontSize="12px"
            />
          </InputGroup>

          <Button
            backgroundColor="#0095E8"
            color="#fff"
            fontWeight="normal"
            colorScheme="blue"
            size="sm"
          >
            Cari
          </Button>
        </HStack>

        <HStack>
          <Avatar
            name="Dane Cooper"
            backgroundColor="#EAECF3"
            color="#5E6278"
          />
          <VStack alignItems="flex-start">
            <Text fontSize="md" fontWeight="semibold">
              Dane Cooper
            </Text>
            <Text fontSize="xs" color="#7E8299" style={{ margin: 0 }}>
              Super Admin
            </Text>
          </VStack>
          <Icon as={FiChevronDown} />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
