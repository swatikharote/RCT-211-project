import { Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
;

export const DestinationCard = ({ id, destination, details, image }) => {
    return (
        <DIV key={id}>
            <Link to={`/housing/${id}`}> <img src={image} />
                <Text position={'absolute'}
                 top={'22px'}
                 left={'25px'}
                 color={'#3A5BA0'}
                 bg={'whitesmoke'}
                 p={'3px'}
                 pl={'5px'}
                 pr={'5px'}
                 borderRadius={'10px'}
                 as={'b'} >{destination}</Text>
                <p >{details}</p>
            </Link>



        </DIV>
    )
}

const DIV = styled.div`

border-radius:5px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
align-items:center;
padding:10px;
height:auto;
position: relative;
  text-align: center;

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


`
