import React from 'react';
import styled from "styled-components";
import { ButtonComp } from './Button';

export const DestinationCard = ({ id, destination, details, image }) => {
    return (
        <DIV key={id}>
            <img src={image} />
            <h1>{destination}</h1>
            <p>{details}</p>
            <p></p>


        </DIV>
    )
}

const DIV = styled.div`

border-radius:5px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
align-items:center;
padding:10px;

.img{
    width:100%;
    padding:5px;    

}


`
