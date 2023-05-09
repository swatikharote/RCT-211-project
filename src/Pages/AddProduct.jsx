import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminSideBar from '../Components/AdminSideBar'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addDestination } from '../Redux/productReducer/action'

const AddProduct = () => {
      
      const [destination, setDestination]=useState('')
      const [image, setImage]=useState('')
      const [details, setDetails]=useState('')

    const dispatch=useDispatch()

      
      
      const handleSubmit=(e)=>{
        e.preventDefault()
        const data={
          destination,
          image,
          details
        }
        console.log(data)
        dispatch(addDestination(data))
        setDestination('')
        setImage('')
        setDetails('')
        alert('Destination Added')
      }
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
         textAlign={'center'}>ADD DESTINATION</Text>
    <DIV>
      <form onSubmit={handleSubmit}>
      
        <Input variant={'outline'}
         _placeholder={{ opacity: 1, color: '#000000' }}
           type="text" placeholder='Destination Name'
         value={destination}
         onChange={(e)=>setDestination(e.target.value)} />
        <Input _placeholder={{ opacity: 1, color: '#000000' }}
         type="text"
          placeholder='Destination Image'
        value={image}
         onChange={(e)=>setImage(e.target.value)} />
        <Input _placeholder={{ opacity: 1, color: '#000000' }}
         type="text"
          placeholder='Destination Details'
        value={details} onChange={(e)=>setDetails(e.target.value)} />
        
        <Button color={'#000000'}
         _hover={{bg:'green', color:'white'}}
          variant='outline' colorScheme='gray'
           type='submit'>ADD DESTINATION</Button>
      </form>
    </DIV>
    </Box>
   </Flex>
  )
}

export default AddProduct

const DIV=styled.div`
width: 430px;
margin: auto;
border: 1px solid gray;
padding: 31px;
margin-top: 50px;
background: white;
opacity: 0.7;



form{
  display:flex;
  flex-direction:column;
}
input{
  height: 40px;
  width: 100%;
  font-size: larger;
  margin-top: 15px;
  border: 1px solid black;
}

button {
  margin-top: 20px;
  width: 100%;
  height: 45px;
  border: none;
}
`