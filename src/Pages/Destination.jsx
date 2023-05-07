import React, { useEffect, useRef, useState } from 'react'
import { getDestination } from '../Redux/productReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { DataArrayOutlined } from '@mui/icons-material';
import styled from "styled-components";
import { Box, Flex } from '@chakra-ui/react';
import { Link, useSearchParams } from 'react-router-dom';
import { SearchBar } from '../Components/SearchBar';

export const Destination = () => {





    const data = useSelector((store) => store.productReducer.products);
    const dispatch = useDispatch()

    let limit = 10;






    useEffect(() => {
        dispatch(getDestination(limit))

    }, [])




    return (
        <Box w={"98%"} m={"auto"}>
            <Box >
                {/* <SearchBar /> */}
            </Box>
            <Box > <DIV>


                {data.map((e) => {
                    return (
                        <div key={e.id}>
                            <Link to={`/housing/${e.id}`}><img src={e.image} />
                                <h1>{e.destination}</h1>
                                <p>{e.details}</p>
                            </Link>



                        </div>
                    )

                })}

            </DIV></Box>
        </Box>
    )
}


const DIV = styled.div`
margin-top:10px;
display:grid;
grid-template-columns:repeat(3,1fr);
grid-template-rows:auto;
gap:8px;
 

div{border-radius:5px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
align-items:center;
padding:10px;}

.img{
    width:100%;
    padding:5px;    

}


`

