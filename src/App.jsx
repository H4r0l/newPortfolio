import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Box bg="#2F4450" minHeight="100vh" padding={"1px 0"}>
      <Box
        margin={"1rem"}
        borderRadius="xl"
        bgGradient="linear(to-b, #92CCF5, #49E1AB)"
        minH={"95vh"}
        overflowY={"hidden"}
      >
        {/* Content goes here */}
        <Navbar/>
      </Box>
    </Box>
  );
}

export default App;
