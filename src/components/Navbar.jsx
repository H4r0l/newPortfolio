import { Box, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Negative from "../assets/Negative.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <motion.div>
    </motion.div>
  );
};

export default Navbar;
