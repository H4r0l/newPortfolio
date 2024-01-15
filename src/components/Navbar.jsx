import { Box, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Negative from "../assets/Negative.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";


const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  


  return (

      <motion.div
        initial={{ bgGradient: "#97E8C0", opacity: 0 }}
        animate={{
          bgGradient: colorMode === "light" ? "#D0EAC1" : "#740F65",
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={{ exit: { opacity: 0 } }}
        // Other Box props
      >
        <Box
          bgGradient={
            colorMode === "light"
              ? "linear(to-b, #97E8C0, #D0EAC1)"
              : "linear(to-b, #990F71, #740F65)"
          }
          h={"120%"} // Adjusted height to 95% of the viewport height
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
              bg="transparent"
              boxShadow="dark-lg"
              rounded="full"
              textColor="black"
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
            <motion.button
              whileTap={{ scale: 0.95, rotate: 15 }}
              animate={{ x: 0, rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            variants={{ exit: { x: 20 } }}
            onClick={toggleColorMode}
              // Other Button props
            >
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </motion.button>
          </VStack>
        </Box>
      </motion.div>
  );
};

export default Navbar;
