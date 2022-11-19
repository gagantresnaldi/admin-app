import { Box, Divider, HStack, Select, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { CHART_DATA } from "../../utils/constant";

const OutletChart = () => {
  return (
    <Box backgroundColor="#fff" width="100%" height="100%" rounded="xl">
      <Box p="10px">
        <Text as="b">Jumlah Outlet</Text>
      </Box>

      <Divider />

      <HStack
        marginTop="10px"
        p="0 10px"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack alignItems="center">
          <Text as="b" fontSize="3xl">
            73
          </Text>

          <Text
            fontSize="xs"
            backgroundColor="#E8FFF3"
            color="#4EB590"
            p="0 10px"
            rounded="lg"
            fontWeight="semibold"
          >
            +2 Toko
          </Text>
        </HStack>

        <Box color="#7E8299">
          <HStack gap="10px" marginBottom="10px">
            <Text>Week</Text>
            <Text
              backgroundColor="#ECF8FF"
              color="#0095E8"
              p="5px 10px"
              rounded="lg"
            >
              Month
            </Text>
            <Text>Year</Text>
          </HStack>

          <Select
            placeholder="2022"
            size="sm"
            rounded="lg"
            width="fit-content"
            marginLeft="auto"
          ></Select>
        </Box>
      </HStack>

      <Box marginTop="10px">
        <ResponsiveContainer height={280}>
          <BarChart
            data={CHART_DATA}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Legend />
            <Bar dataKey="outlet" barSize={10} fill="#00A3FF" />
            <Bar dataKey="uv" barSize={10} fill="#eee" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default OutletChart;
