import React from "react";
import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { useColorMode } from "@chakra-ui/react";
function App() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="#606060" minHeight="100vh" padding={"1px 0"}>
      <Box
        margin={"1rem"}
        borderRadius="xl"
        bgGradient={
          colorMode === "light"
            ? "linear(to-b, #92CCF5, #49E1AB)"
            : "linear(to-b, #245478, #0F3449)" // Darker shades for dark mode
        }
        minH={"95vh"}
        overflowY={"hidden"}
      >
        <Card>
          <CardBody>
            <Text>Hello World</Text>
          </CardBody>
        </Card>
        {/* Content goes here */}
        <Navbar />
      </Box>
    </Box>
  );
}

export default App;
