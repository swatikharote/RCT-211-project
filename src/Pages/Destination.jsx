import React, { useEffect } from 'react'
import { getDestination } from '../Redux/productReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components";
import { Box, Text } from '@chakra-ui/react';
import { Link} from 'react-router-dom';

export const Destination = () => {
    const loading = useSelector((store) => store.productReducer.isLoading);
    const data = useSelector((store) => store.productReducer.products);
    const dispatch = useDispatch()

    let limit = 10;






    useEffect(() => {
        dispatch(getDestination(limit))

    }, [])


    if(loading){
        return <h1 style={{fontSize:'40px', textAlign:'center' , marginTop: '20px'}}>Loading...</h1>
    }

    return (
        <Box w={"98%"} m={"auto"}>
            <Box >
                {/* <SearchBar /> */}
            </Box>
            <Box > <DIV>


                {data.map((e) => {
                    return (
                        <div key={e.id}>
                            <Link to={`/housing/${e.id}`}><img src={e.image} alt={e.destination}/>
                            <Text position={'absolute'}
                 top={'22px'}
                 left={'25px'}
                 color={'#3A5BA0'}
                 bg={'whitesmoke'}
                 p={'3px'}
                 pl={'5px'}
                 pr={'5px'}
                 borderRadius={'10px'}
                 as={'b'} >{e.destination}</Text>
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
padding:10px;
position: relative;
text-align: center;
}

.img{
    width:100%;
    padding:5px;    

}
p{
    text-align: left;
    margin-top: 8px;
    font-family: sans-serif;
    font-size: 18px;
}
@media  all and (max-width: 425.5px){
  grid-template-columns: repeat(1,1fr);
}
@media  all and (min-width:426px) and  (max-width: 768px){
  grid-template-columns: repeat(2,1fr);
}

`

