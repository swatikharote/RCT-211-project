import React, { useEffect } from 'react'
import { getAccomodation } from '../Redux/productReducer/action'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Box, Flex } from '@chakra-ui/react';

import { HousingCard } from '../Components/HousingCard';
import { HousingSidebar } from '../Components/HousingSidebar';


const Housing = () => {

  const { id } = useParams();
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const data = useSelector((store) => store.productReducer.products)

  let obj = {
    params: {
      ownerShip: searchParams.getAll("ownerShip"),
      type: searchParams.getAll("type"),
      _sort: searchParams.get("orderPrice") && "price",
      _order: searchParams.get("orderPrice"),
      // _sort: searchParams.get("orderRating") && "rating",
      // _order: searchParams.get("orderRating")
    }
  }

  useEffect(() => {

    dispatch(getAccomodation(id, obj))

  }, [searchParams])



  return (
    <>
      <Flex>
        <Box w={"22%"} >
          <HousingSidebar />
        </Box>
        <Box w={"78%"}>

          <DIV>

            {data?.map((item) => {
              return <HousingCard key={item.id} {...item} />
            })}
          </DIV>
        </Box>
      </Flex>

    </>
  )
}

export default Housing


const DIV = styled.div`
margin:auto;
margin-top:20px;

display:grid;
grid-template-columns:repeat(3,1fr);
gap: 10px;
grid-template-rows:auto;

@media  all and (max-width: 425.5px){
  grid-template-columns: repeat(1,1fr);
}
@media  all and (min-width:426px) and  (max-width: 768px){
  grid-template-columns: repeat(2,1fr);
}

`