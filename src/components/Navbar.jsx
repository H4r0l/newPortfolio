import { Box, Button, VStack  } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Negative from "../assets/Negative.png";

const Navbar = () => {
    return (
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-200%" }}
        transition={{ duration: 0.7 }}
      >
        <Box
          bgGradient="linear(to-b, #97E8C0, #D0EAC1)"
          borderRadius="xl"
          minH={"95vh"}
          w={"10vh"}
          boxShadow="2px 0px 10px rgba(0, 0, 0, 0.5)"
          position="fixed"
          left="0"
          top="0"
          zIndex="10"
          overflow="hidden"
        >
          <VStack p={4}>
            <Button
              as={Link}
              to="/"
              bg="#578A76"
              rounded="full"
              textColor={"white"}
            >
              <img src={Negative} alt="" width={"16px"} height={"16px"} />
            </Button>
            <Button as={Link} to="/about" bg="#578A76" rounded="full">
              A
            </Button>
            <Button as={Link} to="/projects" bg="#578A76" rounded="full">
              P
            </Button>
            <Button as={Link} to="/contact" bg="#578A76" rounded="full">
              C
            </Button>
          </VStack>
        </Box>
      </motion.div>
    );
};

export default Navbar;
