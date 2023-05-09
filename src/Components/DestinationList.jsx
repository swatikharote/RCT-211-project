

import React, { useEffect, useState } from 'react';
import { getDestination } from "../Redux/productReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { DestinationCard } from './DestinationCard';
import styled from "styled-components";
import { ButtonComp } from './Button';
import { Box, Text } from '@chakra-ui/react';

const DestinationList = () => {
  const data = useSelector((store) => store.productReducer.products);

  const dispatch = useDispatch()

  let limit = 6;


  useEffect(() => {
    dispatch(getDestination(limit))

  }, [])



  return (
    <div>
      <Box bg='#c4d3e8' width={'98%'} margin={'auto'}>
        <Text color={'red'} fontSize={"25px"} ml='3px' mt={"20px"} fontFamily={'monospace'} >Popular Destination</Text>
      </Box>

      <DIV>
        {data?.map((item) => {
          return <DestinationCard key={item.id} {...item} />
        })}


      </DIV>


    </div>
  )
}


export default DestinationList

const DIV = styled.div`
margin-top:10px;
display:grid;
grid-template-columns:repeat(3,1fr);
grid-template-rows:auto;
gap:8px;
 
@media  all and (min-width:222px) and (max-width: 424px){
  grid-template-columns: repeat(1,1fr);
}
@media  all and (min-width:426px) and (max-width: 768px){
  grid-template-columns: repeat(2,1fr);
}

`
