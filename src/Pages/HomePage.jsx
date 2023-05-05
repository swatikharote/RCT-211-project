import React, { useEffect, useState } from 'react'
<<<<<<< Updated upstream
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

=======
import { Footer } from '../Components/Footer'
import { Sidebar } from '../Components/Sidebar'
import { Index } from '../Components/Index'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const HomePage = () => {
    

   
    return (

        <Box>
            <Flex pl='2px' justifyContent={'space-between'}>
                <Box width={'26%'}>
                    <Sidebar/>
                </Box>
                <Box width={'73%'}>
                    <Index/>
                </Box>
            </Flex>
>>>>>>> Stashed changes
            <Footer />
        </Box>

    )
}
