import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDestination } from '../Redux/productReducer/action';
import { Box, Button, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AdminDestination = () => {
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
                            <img src={e.image} />
                            <h2>{e.destination}</h2>
                            <p>{e.details}</p>
                            <Flex justifyContent={'space-between'}>
                                <Button _hover={{bg:'green.400'}}>
                                    <Link to={`/edit/${e.id}`}>Edit</Link>
                                    </Button>
                                <Button _hover={{bg:'red'}}>Delete</Button>
                            </Flex>

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
@media  all and (max-width: 425.5px){
  grid-template-columns: repeat(1,1fr);
}
@media  all and (min-width:426px) and  (max-width: 768px){
  grid-template-columns: repeat(2,1fr);
}

`

export default AdminDestination
