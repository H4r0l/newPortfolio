import { Box, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Negative from "../assets/Negative.png";
import { FaUser, FaProjectDiagram, FaAddressCard, FaSun } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";


const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  


  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-200%" }}
      transition={{ duration: 0.7 }}
    >
      <Box
        bgGradient={
          colorMode === "light"
            ? "linear(to-b, #97E8C0, #D0EAC1)"
            : "linear(to-b, #254D35, #355C45)"
        }
        h={"95vh"} // Adjusted height to 95% of the viewport height
        w={"7vh"}
        boxShadow="2px 0px 10px rgba(0, 0, 0, 0.5)"
        zIndex="10"
        overflow="hidden"
        flexDirection="column" // Arrange items vertically
      >
        <VStack
          p={4}
          h="100%"
          justifyContent="space-evenly"
          flexGrow={1}
          pb="65vh"
        >
          <Button
            as={Link}
            to="/"
            bg="#8b94a7"
            rounded="full"
            textColor={"white"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            p={1}
            _hover={"blue"}
          >
            <img
              src={Negative}
              alt=""
              width={"16px"}
              height={"16px"}
              style={{ margin: 0 }}
            />
          </Button>
          <Button onClick={toggleColorMode}
            bg="transparent">
            <FaSun />
          </Button>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default Navbar;
