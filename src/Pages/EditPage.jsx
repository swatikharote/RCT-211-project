import { Box, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import AdminSideBar from '../Components/AdminSideBar'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const EditPage = () => {
    const {id}=useParams()
  return (
    <Flex mt={'10px'}>
    <Box width={'20%'}>
      <AdminSideBar/>
    </Box>
    <Box width={'80%'}
     bgImage={'https://images.pexels.com/photos/7412094/pexels-photo-7412094.jpeg?auto=compress&cs=tinysrgb&w=1150'}>
      
      <Text fontSize={'4xl'}
       color={'green.700'}
        mt={'60px'}
         textAlign={'center'}>EDIT DESTINATION</Text>
    <DIV>
    <Input variant={'outline'}
         _placeholder={{ opacity: 1, color: '#000000' }}
           type="text" placeholder='Destination Name'
        />
         
    </DIV>

    </Box>
   </Flex>
  )
}
  
export default EditPage

const DIV=styled.div`
    
`