import React from "react";
import {
  Box,
  Card,
  Flex,
  Grid,
  Text,
  useColorMode,
  Heading,
  CardHeader,
  CardBody
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="#606060" minHeight="100vh" padding="1px">
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
        // Other Box props
      >
        <Box
          margin={"1rem"}
          borderRadius="xl"
          bgGradient={
            colorMode === "light"
              ? "linear(to-b, #92CCF5, #49E1AB)"
              : "linear(to-b, #245478, #9D3459)" // Darker shades for dark mode
          }
          minH="80vh" // Adjust to ensure full viewport height
          display="flex" // Enable flexbox for content arrangement
          flexDirection="row" // Arrange content vertically
          overflowY="hidden"
        >
          <Flex position="sticky" top={0} zIndex={10}>
            {/* Keep Navbar sticky */}
            <Navbar />
          </Flex>
          <Box
            flex="1" // Allow content to expand within available space
            bg="inherit"
            padding="4rem 0"
            // Add margin for rounded box effect
            margin="1rem"
            borderRadius="xl" // Match outer container's border radius
          >
            <Grid
              templateRows="repeat(3, 1fr)"
              gap={4}
              padding={8}
              fontFamily="Alata"
            >
              {/* Content remains the same */}
              <motion.div
                initial={{ opacity: 0, fontSize: "1.5rem", y: 100 }}
                animate={{ opacity: 1, fontSize: "5rem", y: 0 }}
                transition={{
                  duration: 3,
                  type: "spring",
                  damping: 7,
                }}
              >
                <motion.Heading
                  initial={{ opacity: 0, fontSize: "2xl" }}
                  animate={{ opacity: 1, fontSize: "5xl" }}
                  as="h2"
                  fontSize="5xl"
                  fontWeight="bold"
                  fontFamily="Victor Mono"
                >
                  Meet Harol.
                </motion.Heading>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <Text padding="5px 0">
                  I'm a Software Developer and this is my portfolio
                </Text>
                Here I'm going to show all my Projects & Skills :)
                <Grid templateColumns="repeat(3, 1fr)">
                  <Card padding="1rem" margin={2} width="24rem">
                    <CardHeader>What is my Dev Stack?</CardHeader>
                    <CardBody>My main stack is ASP.NET</CardBody>
                  </Card>
                  <Card padding="1rem" margin={2} width="24rem">
                    <CardHeader>Experience? :/</CardHeader>
                    <CardBody>I have around 1 Year experience</CardBody>
                  </Card>
                </Grid>
              </motion.div>
            </Grid>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default App;
