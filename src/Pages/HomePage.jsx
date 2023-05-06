import React, { useEffect, useState } from 'react'

import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Sidebar } from '../Components/Sidebar'
import { Index } from '../Components/Index'
import { Box, Image, Flex } from '@chakra-ui/react'

import axios from 'axios'







export const HomePage = () => {









    return (

        <Box h={"100vh"}>


            <Flex>
                <Sidebar />
                <Index />

            </Flex>

            <Footer />
        </Box>

    )
}
