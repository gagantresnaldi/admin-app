import { Box, HStack, Link, Text, Icon } from "@chakra-ui/react";
import { MdOutlineSpaceDashboard } from "react-icons/md";

import SidebarLink from "./SidebarLink";
import { SIDEBAR_LINK } from "../../utils/constant";

const Sidebar = () => {
  return (
    <Box
      w="13%"
      backgroundColor="#fff"
      paddingLeft="32px"
      paddingTop="24px"
      paddingRight="10px"
      overflow="hidden"
      sx={{
        "@media screen and (max-width: 768px)": {
          display: "none",
        },
      }}
    >
      <Box>
        <Text className="font-inter" as="b" fontSize="3xl">
          LOGO
        </Text>

        <HStack>
          <Text fontSize="xs" as="i">
            Version 0.12
          </Text>
          <Text fontSize="xs" color="#98654F" fontWeight="semibold">
            Beta
          </Text>
        </HStack>
      </Box>

      <Box marginTop="40px" height="100%" overflow="auto">
        <Link color="#7E8299" style={{ textDecoration: "none" }}>
          <HStack alignItems="center">
            <Icon w={5} h={5} as={MdOutlineSpaceDashboard} />{" "}
            <Text>Dashboard</Text>
          </HStack>
        </Link>

        {SIDEBAR_LINK.map((item, index) => (
          <SidebarLink key={index} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
