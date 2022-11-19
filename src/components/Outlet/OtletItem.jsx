import { Box, Divider, HStack, Text } from "@chakra-ui/react";

const OutletItem = ({ title, fields, items }) => {
  return (
    <Box backgroundColor="#fff" rounded="xl">
      <Box p="10px">
        <Text as="b">{title}</Text>
      </Box>

      <Divider />

      <Box p="10px">
        <HStack
          justifyContent="space-between"
          color="#7E8299"
          marginBottom="10px"
        >
          <Text fontSize="xs">{fields.left}</Text>
          <Text fontSize="xs">{fields.right}</Text>
        </HStack>

        {items.map((item, index) => (
          <HStack
            key={index + item.name + item.location}
            justifyContent="space-between"
            marginBottom="10px"
          >
            <Box>
              <Text fontWeight="semibold">{item.name}</Text>
              <Text color="#7E8299" fontSize="xs">
                {item.location}
              </Text>
            </Box>

            <Box
              backgroundColor="#E5EAEE"
              color="#7E8299"
              p="5px 10px"
              rounded="lg"
            >
              <Text fontSize="xs">{item.right}</Text>
            </Box>
          </HStack>
        ))}
      </Box>
    </Box>
  );
};

export default OutletItem;
