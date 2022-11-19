import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { MdOutlineSpaceDashboard, MdOutlinePriceChange } from "react-icons/md";
import { HiOutlineArchive } from "react-icons/hi";
import { FiChevronUp } from "react-icons/fi";

const SidebarLink = ({ title, items }) => {
  return (
    <Box marginTop="20px">
      <HStack justifyContent="space-between">
        <Text fontWeight="semibold">{title}</Text>
        <Icon as={FiChevronUp} />
      </HStack>

      {items.map((item, index) => {
        const icon =
          item.icon === "dashboard"
            ? MdOutlineSpaceDashboard
            : item.icon === "box"
            ? HiOutlineArchive
            : MdOutlinePriceChange;

        return (
          <Link
            className={item.active && "active-link"}
            key={index + item.name}
            color="#7E8299"
            style={{ textDecoration: "none" }}
          >
            <HStack alignItems="center">
              <Icon w={5} h={5} as={icon} /> <Text>{item.name}</Text>
              {item.child && item.child.length && (
                <Box flex={1} display="flex" justifyContent="flex-end">
                  <Icon as={FiChevronUp} />
                </Box>
              )}
            </HStack>
            {item.child && item.child.length ? (
              <Box paddingLeft="28px">
                {item.child.map((item, index) => (
                  <Text key={index + item}>{item}</Text>
                ))}
              </Box>
            ) : null}
          </Link>
        );
      })}
    </Box>
  );
};

export default SidebarLink;
