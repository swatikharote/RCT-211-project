import React from 'react'


import { Sidebar } from '../Components/Sidebar'
import { Index } from '../Components/Index'
import { Box,Flex } from '@chakra-ui/react'








export const HomePage = () => {

    return (

        <Box>
            <Flex width={'98%'} margin={'auto'}>
                <Box width={'18%'}>
                <Sidebar />
                </Box>
                <Box width={'81%'}>
                <Index/>
                </Box>
                

            </Flex>

            {/* <Footer /> */}
        </Box>

    )
}
