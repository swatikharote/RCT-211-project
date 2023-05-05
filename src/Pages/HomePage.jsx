import React, { useEffect, useState } from 'react'

import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Sidebar } from '../Components/Sidebar'
import { Index } from '../Components/Index'
import { Box, Image, Flex } from '@chakra-ui/react'
import { ImageSlider } from '../Components/ImageSlider'
import axios from 'axios'






export const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/destinations").then((res) => {
            console.log(res.data)
        })
    }, [])






    return (

        <Box h={"100vh"}>

            {/* <ImageSlider /> */}
            <Flex>
                <Sidebar />
                <Index />
            </Flex>

            <Footer />
        </Box>

    )
}
