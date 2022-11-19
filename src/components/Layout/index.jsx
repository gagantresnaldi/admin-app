import { Flex, Box } from "@chakra-ui/react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      backgroundColor="#F5F8FA"
      className="font-poppins"
    >
      <Sidebar />

      <Box flex={1} overflowY="hidden">
        <Navbar />

        <Box
          padding={"30px"}
          overflowY="auto"
          height="100%"
          paddingBottom="100px"
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
