import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AdminSideBar from '../Components/AdminSideBar'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { editDestination } from '../Redux/productReducer/action'

const EditPage = () => {
    const {id}=useParams()
    const [destination, setDestination]=useState('')
    const [image, setImage]=useState('')
    const [details, setDetails]=useState('')

    const dest = useSelector((store) => store.productReducer.products);
    const dispatch=useDispatch()

    useEffect(()=>{
      const data=dest.find((el)=> el.id == id)
      setDestination(data.destination)
      setImage(data.image)
      setDetails(data.details)


    }, [])


  const handleEdit=()=>{
    const data={destination:destination, image:image, details:details}
    dispatch(editDestination(id, data))
    alert('Destination Updated')
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
        mt={'50px'}
         textAlign={'center'}>UPDATE DESTINATION</Text>
         <Text  fontSize={'4xl'}
       color={'green.700'}
        mt={'10px'}
         textAlign={'center'}>ID: {id}</Text>
    <DIV>
    <Input variant={'outline'}
         _placeholder={{ opacity: 1, color: '#000000' }}
           type="text"
           value={destination}
           onChange={(e)=>setDestination(e.target.value)}
        />
     <Input _placeholder={{ opacity: 1, color: '#000000' }}
         type="text"
          placeholder='Destination Image'
          value={image}
         onChange={(e)=>setImage(e.target.value)}
        />
        <Input _placeholder={{ opacity: 1, color: '#000000' }}
         type="text"
          placeholder='Destination Details'
          value={details} onChange={(e)=>setDetails(e.target.value)}
       />


     <Button color={'#000000'}
         _hover={{bg:'green', color:'white'}}
          variant='outline' colorScheme='gray'
           type='submit' onClick={handleEdit}>UPDATE DESTINATION</Button>    
         
    </DIV>

    </Box>
   </Flex>
  )
}
  
export default EditPage

const DIV=styled.div`
 width: 430px;
margin: auto;
border: 1px solid gray;
padding: 31px;
margin-top: 4
0px;
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