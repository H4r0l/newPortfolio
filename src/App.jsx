import React from "react";
import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
    
      <Sidebar/>
      <Box
        position={"relative"}
        fontSize={"3xl"}
        fontWeight={"bold"}
        flexDirection={"row"}
        top={"35vh"}
        justifyContent={"center"}
        textAlign={"center"}
        height={"auto"}
        >
        Content
      </Box>

    </>
  );
}

export default App;
