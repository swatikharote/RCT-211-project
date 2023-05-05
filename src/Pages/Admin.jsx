import React from 'react'
import AdminSideBar from '../Components/AdminSideBar'
import AdminHomePage from './AdminHomePage'
import { Flex } from '@chakra-ui/react'


const Admin = () => {
  return (
    <Flex>
      <AdminSideBar/>
      <AdminHomePage/>
    </Flex>
  )
}

export default Admin

