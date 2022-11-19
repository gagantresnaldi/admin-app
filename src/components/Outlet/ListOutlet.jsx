import {
  Box,
  Divider,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";

import { BiSearch } from "react-icons/bi";

import { TABLE_FIELDS, TABLE_ITEMS } from "../../utils/constant";

const ListOutlet = () => {
  return (
    <Box backgroundColor="#fff" rounded="xl">
      <Box p="10px">
        <Text as="b">List Outlet</Text>
      </Box>

      <Divider />

      <HStack justifyContent="space-between" p="10px">
        <Select placeholder="Semua Lokasi" size="sm" width="130px"></Select>

        <InputGroup
          size="sm"
          backgroundColor="#F5F8FA"
          color="#7E8299"
          rounded="md"
          width="290px"
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
      </HStack>

      <Box p="10px">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                {TABLE_FIELDS.map((item, index) => (
                  <Th key={index + item}>{item}</Th>
                ))}
              </Tr>
            </Thead>

            <Tbody>
              {TABLE_ITEMS.map((item, index) => (
                <Tr key={index + item.outlet}>
                  <Td>{index + 1}</Td>
                  <Td>{item.outlet}</Td>
                  <Td>{item.owner}</Td>
                  <Td>{item.transactions}</Td>
                  <Td>{item.location}</Td>
                  <Td>{item.date}</Td>
                  <Td>{item.omzet}</Td>
                  <Td>
                    <Button
                      colorScheme="blue"
                      backgroundColor="#0095E8"
                      fontWeight="normal"
                      size="sm"
                    >
                      Rincian
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ListOutlet;
