import React from "react";
import { Box, Card, CardBody, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { useColorMode } from "@chakra-ui/react";
import {motion } from "framer-motion"

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
            : "linear(to-b, #245478, #9D3459)" // Darker shades for dark mode
        }
        minH={"95vh"}
        overflowY={"hidden"}
      >
        <Flex>
          <Navbar />
          {/**Create all the content inside Here, dont change the outside Layout*/}
          <Box bg="inherit" padding="4rem 0">
            <Grid
              templateRows="repeat(3, 1fr)"
              gap={4}
              padding={12}
              fontFamily="Alata"
            >
              <motion.div
                initial={{ opacity: 0, fontSize: "1.5rem", y: 100 }}
                animate={{ opacity: 1, fontSize: "5rem", y: 0 }}
                transition={{
                  duration: 3,
                  type: "spring",
                  damping: 7,
                }}>
                <Heading
                  as="h2"
                  fontSize="5xl"
                  fontWeight="bold"
                  fontFamily="Victor Mono"
                >
                  Meet Harol.
                </Heading>
              </motion.div>
              <br />
              <Text>I'm a Software Developer and this is my portfolio</Text>
              Here I'm going to show all my Projects & Skills :)
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
