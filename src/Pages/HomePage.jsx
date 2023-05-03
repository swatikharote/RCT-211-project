import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Sidebar } from '../Components/Sidebar'
import { Index } from '../Components/Index'
import { Box } from '@chakra-ui/react'

export const HomePage = () => {
    return (

        <Box>
            <Navbar />
            <Sidebar />
            <Index />
            <Footer />
        </Box>

    )
}
