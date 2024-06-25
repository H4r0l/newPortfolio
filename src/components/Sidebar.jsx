import React from 'react'
import {VStack,Button} from "@chakra-ui/react" 
import { Navigate } from 'react-router'

const Sidebar = () => {
  return (
    <>
        <VStack 
        position={"absolute"} 
        backgroundColor={"slategray"}
        height={"100vh"}
        fontFamily={"Jetbrains Mono"}
        padding={"2"}
        gap={"2rem"}
        >
            <Button
            padding={"4"} 
            width={"1rem"}
            border={"2px"} 
            borderColor={"blackAlpha.400"}
            rounded={"3xl"}>
                          
            </Button>

        </VStack>
    </>
  )
}

export default Sidebar