import React from 'react'
import AdminSideBar from '../Components/AdminSideBar'
import AdminHomePage from './AdminHomePage'
import { Box, Flex } from '@chakra-ui/react'


const Admin = () => {
  return (
    <Flex>
      <Box width={'20%'}>
      <AdminSideBar/>
      </Box>
      <Box  width={'80%'}>
      <AdminHomePage/>
      </Box>
      
      
    </Flex>
  )
}

export default Admin

