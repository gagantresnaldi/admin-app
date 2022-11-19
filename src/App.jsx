import { Box, Button, Grid, GridItem } from "@chakra-ui/react";

import { Layout, ListOutlet, OutletItem, OutletChart } from "./components";

import { OUTLET_BARU, OUTLET_LARIS } from "./utils/constant";

const App = () => (
  <Layout>
    <Box>
      <Button
        colorScheme="teal"
        backgroundColor="#50CD89"
        color="#fff"
        fontWeight="normal"
        size="sm"
      >
        Tambah Outlet
      </Button>
    </Box>

    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={8}
      margin="20px 0"
      sx={{
        "@media screen and (max-width: 768px)": {
          gridTemplateColumns: "auto",
        },
      }}
    >
      <GridItem colSpan={2}>
        <OutletChart />
      </GridItem>

      <GridItem>
        <OutletItem {...OUTLET_LARIS} />
      </GridItem>

      <GridItem>
        <OutletItem {...OUTLET_BARU} />
      </GridItem>
    </Grid>

    <ListOutlet />
  </Layout>
);

export default App;
