import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'





export const HousingCard = ({ person_image, person_name, ownerShip, id, address, price, type, rating, guestAllowed, amenities }) => {
    
 
  
  
  return (


        <DIV>
          <Flex p='5px' justifyContent={'space-between'}>
            <div className='ProductCard-image'>
                <img src={person_image} alt={person_name}/>
            </div>
            <div className='ProductCard-text'>
            <Text mt='2px' mb='6px'>Name: {person_name}</Text>
            <Text mb='6px'>Rating: {rating}</Text>
            <Text mb='6px'>House: {ownerShip}</Text>
            <Text mb='6px'>Price: ${price}</Text>
            <Text>Person: {guestAllowed}</Text> 
            </div>
            </Flex>
            <Box boxShadow={'1px 1px'} p={'6px'}>
              <Text mb='6px'>Type: {type}</Text>
              <Text mb='6px'>Address : {address}</Text>
              <Text mb='6px'>Amenities: {amenities}</Text>
              
            </Box>
            


        </DIV>

    )
}


const DIV = styled.div`
    /* border:1px solid black; */
    height:auto;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 5px;
  

button{
  border: 1px solid red;
}
.image-card{
    min-height: 310px;
    border-radius:10%;
}

.ProductCard-image {
  display: flex;
  width: 60%;
  height: 160px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}

.ProductCard-image > img {
  width: 100%;
  height: 160px;
  border-radius:10%;
}
.ProductCard-text{
  width: 35%;
}

 
`

