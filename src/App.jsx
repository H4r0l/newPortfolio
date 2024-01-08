import React from "react";
import { Box, Card, CardBody, Flex, Grid, Heading, Text } from "@chakra-ui/react";
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
        <Flex>
          <Navbar />
          {/**Create all the content inside Here, dont change the outside Layout*/}
          <Box bg="inherit" padding="4rem 0">
            <Grid templateRows="repeat(3, 1fr)" gap={4} padding={12}>
              <Heading as="h2" fontSize="4xl" fontWeight="bold" fontFamily="Poppins">
                Meet (Your Name)
              </Heading>
              <Text fontFamily="Alata">
                (Short, impactful sentence describing your developer identity)
              </Text>
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
