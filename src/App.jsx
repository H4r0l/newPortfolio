import React from "react";
import {
  Box,
  Card,
  Flex,
  Grid,
  Text,
  useColorMode,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import fetchData from "./components/fetchRepos";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();



  return (
    <Box bg="#606060" minHeight="100vh" padding="1px" flexDirection="column">
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
          minH="95vh" // Adjust to ensure full viewport height
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
            <Flex flexDirection={"column"} padding={8} fontFamily="Alata">
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
                <Text
                  fontSize="5xl"
                  fontWeight="bold"
                  fontFamily="Victor Mono"
                >
                  Meet Harol.
                </Text>
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
                  <Card padding="1px" margin={"5px"} width="16rem">
                  </Card>
                  <Card padding="1px" margin={"5px"} width="16rem">
                  </Card>
                </Grid>
              </motion.div>
            </Flex>
          </Box>
          <Box>
                  {console.log(fetchData())}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default App;
